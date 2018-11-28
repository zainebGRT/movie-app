import React from "react";

function RateMovie({ rating, clickedRating = () => {} }) {
  let arrayStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      arrayStars.push(
        <span onClick={() => clickedRating(i + 1)} key={i}>
          ★
        </span>
      );
    } else {
      arrayStars.push(
        <span onClick={() => clickedRating(i + 1)} key={i}>
          ☆
        </span>
      );
    }
  }
  return (
    <div>
      <div class="rate">{arrayStars}</div>
    </div>
  );
}
export default RateMovie;
