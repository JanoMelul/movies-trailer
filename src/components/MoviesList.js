const MoviesList = ({ movies, selectMovie }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <div className="container mt-3">
      <div className="row">
        {movies.map((movie) => (
          <div
            className="col-md-3 mb-3"
            key={movie.id}
            onClick={() => selectMovie(movie)}
          >
            <img
              src={`${URL_IMAGE + movie.poster_path}`}
              alt="poster"
              height={450}
              width={"100%"}
            />
            <h4 className="text-center">{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
