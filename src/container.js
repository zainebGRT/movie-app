import React, { Component } from "react";
import SearchForMovie from "./searchForMovie.js";
import RateMovie from "./rateMovie.js";
import TitleRateMovie from "./titleRateMovie.js";
import MovieList from "./movieList";
import AddModal from "./addModal.js";
const movies = [
  {
    image:
      "http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/84/82/74/19789280.jpg",
    title: "The help, 2011",
    rate: 2,
    id: "help"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51LgePF0v%2BL._SY450_.jpg",
    title: "The notebook, 2004",
    rate: 3,
    id: "notbook"
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    title: "The Pursuit of Happyness (2006)",
    rate: 4,
    id: "3"
  },
  {
    image: "https://images6.alphacoders.com/339/339306.jpg",
    title: "The vow, 2011",
    rate: 4,
    id: "vow"
  },
  {
    image:
      "https://img.bfmtv.com/c/1000/600/399/2f066145060698d8570af4a702bcb.jpg",
    title: "Gladiator (2000)",
    rate: 5,
    id: "gladiator"
  },
  {
    image:
      "https://homesweetmome.files.wordpress.com/2012/11/friends-tv-show-1.jpg?w=695",
    title: "Friends (1994)",
    rate: 5,
    id: "friends"
  },
  {
    image: "",
    title: "",
    rate: "",
    id: "new"
  }
];

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      minRating: 1,
      filtredList: movies
    };
  }

  ChangeItem = newItem => {
    this.setState({
      title: newItem
    });
  };

  addNewMovie = newMovies => {
    console.log(newMovies);
    this.setState({
      filtredList: this.state.filtredList.concat(newMovies)
    });
  };

  render() {
    return (
      <div class="container">
        <SearchForMovie
          inputSearch={this.state.filtredList}
          ChangeItem={this.ChangeItem}
        />
        <TitleRateMovie
          rating={this.state.minRating}
          ratingChange={newRate =>
            this.setState({
              minRating: newRate
            })
          }
        />
        <MovieList
          moviefiltred={this.state.filtredList.filter(
            el =>
              el.title.toUpperCase().includes(this.state.title.toUpperCase()) &&
              el.rate >= this.state.minRating
          )}
        />
        <div>
          <AddModal
            onAddMovie={newMovies => {
              this.addNewMovie({
                title: newMovies.name.value,
                image: newMovies.image.value,
                rate: newMovies.rating.value
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Container;
