import React from 'react';
import '../src/movies.css';

class ImmutableMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        "Hidden Figures": {
          src: "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_UX182_CR0,0,182,268_AL_.jpg", 
          title: "Hidden Figures", 
          release: 2016, 
          imdbScore: 7.8, 
          plot: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.", 
          director: "Theodore Melfi"},
        "Bucket List": {
          src: "https://m.media-amazon.com/images/M/MV5BMTY2NTUyMjIyNF5BMl5BanBnXkFtZTYwNzYwMDM4._V1_UX182_CR0,0,182,268_AL_.jpg",
          title: "The Bucket List",
          release: 2007,
          imdbScore: 7.4,
          plot: "Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.",
          director: "Rob Reiner"},
      },
    };
  }
  
  myChangeHandler = (a) => {
    let chosenMovie = { ...this.state.movies["Hidden Figures"] }
    chosenMovie = a.target.innerText;
    alert(chosenMovie)
  }
  
  render() {
    let chosenMovie = { ...this.state.movies["Hidden Figures"] }
    return (
      <div className="card">
        <p>Check out the other movies as well.</p>
        <button onClick={this.myChangeHandler}>Hidden Figures</button>
        <button onClick={this.myChangeHandler}>Bucket List</button>
        <p></p>
        <img src={chosenMovie.src} alt={chosenMovie.title} title={chosenMovie.title} />
        
      </div>
    )
  }

}

export default ImmutableMovies;