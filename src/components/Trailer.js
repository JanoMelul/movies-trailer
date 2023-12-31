import { useState } from "react";
import YouTube from "react-youtube";

const Trailer = ({ movie, trailer }) => {
  const [playing, setPlaying] = useState(false);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <main>
        {movie ? (
          <div
            className="viewtrailer"
            style={{
              backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
            }}
          >
            {playing ? (
              <>
                <YouTube
                  videoId={trailer.key}
                  className="reproductor container"
                  containerClassName={"youtube-container amru"}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
                <button onClick={() => setPlaying(false)} className="boton">
                  Close
                </button>
              </>
            ) : (
              <div className="container">
                <div className="">
                  {trailer ? (
                    <button
                      className="boton"
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Play Trailer
                    </button>
                  ) : (
                    <h3>Sorry, no trailer available</h3>
                  )}
                  <h1 className="text-white">{movie.title}</h1>
                  <p className="text-white">{movie.overview}</p>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Trailer;
