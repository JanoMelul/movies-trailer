import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Trailer from "./components/Trailer";
import MoviesList from "./components/MoviesList";

const App = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "6cd9b283d5174facb4e3981ccb357ed2";

  //Variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);
    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Trailer Movies</h2>

      <Search searchMovies={searchMovies} setSearchKey={setSearchKey} />

      <Trailer movie={movie} trailer={trailer} />

      <MoviesList movies={movies} selectMovie={selectMovie} />
    </div>
  );
};

export default App;
