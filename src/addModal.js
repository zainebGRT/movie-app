import React from "react";
const AddModal = ({ onAddMovie = () => {} }) => {
  return (
    <div className="add-btn">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add Movie
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New Movie
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form
                className="add-movie"
                onSubmit={e => {
                  e.preventDefault();
                  onAddMovie(e.target);
                }}
              >
                <input type="text" id="name" placeholder="movie's title" />
                <input type="text" id="image" placeholder="movie's url" />
                <input type="number" id="rating" placeholder="movie's rate" />
                <input type="submit" class="btn btn-primary" value="Add" />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddModal;
