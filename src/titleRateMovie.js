import React from "react";
import RateMovie from "./rateMovie";

function TitleRateMovie({ rating, ratingChange }) {
  return (
    <div className="search-nav">
      <h5 class="title-rate">Minimum Rating</h5>
      <RateMovie
        rating={rating}
        clickedRating={newRate => {
          ratingChange(newRate);
        }}
      />
    </div>
  );
}
export default TitleRateMovie;
