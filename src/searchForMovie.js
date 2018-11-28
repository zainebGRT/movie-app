import React from "react";

const SearchForMovie = props => {
  return (
    <div>
      <form className="input-form">
        <input
          onChange={e => {
            props.ChangeItem(e.target.value);
          }}
          id="search"
          class="search-bar"
          type="texte"
          placeholder=" Looking for...?! "
        />
      </form>
    </div>
  );
};
export default SearchForMovie;
