import React, { Component} from 'react';

const credentials = require('./credentials.json');

class Title extends Component{

  state = {
    loading: true,
    movie: null
  };
  
  constructor(props){
    super(props)
    //console.log(props)
    //console.log(this.props.match.params.movieID)
    let id = this.props.match.params.movieID
    this.searchmovie(id) 
  }

  async searchmovie(id) {
    console.log("search using searchovie");
    const url = 'http://www.omdbapi.com/?apikey='+credentials.imdb.apikey+'&i='+ id;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ movie: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.movie) {
      return <div>didn't get a movie</div>;
    }
    return (
    <div className="App">
      <a href="/">Back</a>
       <div className="poster">
        <img
          width="200"
          src={this.state.movie.Poster}
          alt={this.state.movie.Title}
        />
      </div>
      <div className="details">
        <h1>{this.state.movie.Title}</h1>
        {/*this.props.match.params.movieID*/}
        <p>IMDb Rate: {this.state.movie.imdbRating}</p>
        <p>Director: {this.state.movie.Director}</p>
        <p>Year: {this.state.movie.Year}</p>
        <p>Genre: {this.state.movie.Genre}</p>
        <p>Released: {this.state.movie.Released}</p>
        <p>Runtime: {this.state.movie.Runtime}</p>
        <p>Actors: {this.state.movie.Actors}</p>
        <p>{this.state.movie.Plot}</p>
      </div>
    </div>
    );
  }
}

export default Title;
