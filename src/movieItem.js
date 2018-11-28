import React from "react";
import RateMovie from "./rateMovie";
const MovieItem = props => {
  return (
    <div className="card">
      <div className="card-movie">
        <span>
          <RateMovie rating={props.movie.rate} />{" "}
        </span>
        <img src={props.movie.image} />
        <h2>{props.movie.title}</h2>
      </div>
    </div>
  );
};
export default MovieItem;
