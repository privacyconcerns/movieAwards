import React from "react";

import "./MovieList.css";

function MovieList(props) {
  let movies = props.movies;
  let nominateMovie = props.nominateMovie;
  let nominations = props.nominations;
  let searchedWord = props.searchedWord;

  function nominationDisabled(movie) {
    let bool = false;
    nominations.forEach((nomination) => {
      if (nomination.imdbID === movie.imdbID) {
        bool = true;
      }
    });
    return bool;
  }

  return (
    <div className="movie-container">
      {" "}
      {movies.length ? (
        <div className="movie-container-text">Results for "{searchedWord}"</div>
      ) : null}
      <div className="movie-list-horizontal-scroll">
        {movies.length ? (
          movies.map((movie) => {
            return (
              <div className="movie" key={movie.imdbID}>
                {movie.Poster !== "N/A" ? (
                  <img
                    className="movie-poster"
                    src={movie.Poster}
                    alt="movie poster"
                  />
                ) : (
                  //TODO: Create unique image for movie poster unavailable
                  <img
                    className="movie-poster"
                    src={`http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg`}
                    alt="movie poster unavailable"
                  />
                )}

                <div className="movie-title">
                  {movie.Title}
                  <span className="movie-year"> ({movie.Year})</span>
                </div>

                <button
                  className="movie-nominate-button"
                  disabled={nominationDisabled(movie)}
                  onClick={() => nominateMovie(movie)}
                >
                  Nominate
                </button>
              </div>
            );
          })
        ) : (
          <div className="movie-search-message">
            {" "}
            Please search for your favourite films{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
