import React from "react";
import MovieItem from "./movieItem.js";

const MovieList = ({ moviefiltred }) => {
  return (
    <div>
      <div class="movie-list">
        {moviefiltred.map(elm => (
          <MovieItem key={elm.id} movie={elm} />
        ))}
      </div>
      <div />
    </div>
  );
};

export default MovieList;
