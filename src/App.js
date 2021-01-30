import React, { Component} from 'react';
import MovieRow from './movieRow.js';
import $ from 'jquery';

const credentials = require('./credentials.json');

class App extends Component{

  constructor(props){
    super(props)
    this.state ={}
    this.performSearch("") 
  }

  performSearch(searchtitle) {
    console.log("search using moviedb");
    const urlmovies ='http://www.omdbapi.com/?apikey='+credentials.imdb.apikey+'&s='+searchtitle;
    $.ajax({
      url: urlmovies,
      success:(searchResults) =>{
        console.log("movie data fetched correctly")
        //console.log(searchResults.Search[0])
        const results = searchResults.Search
        //console.log(results[0])

        var movieRows = []

        if(results){
          results.forEach((movies) => {
            console.log(movies)
            const movieRow = <MovieRow key={movies.imdbID} movie ={movies}/>
            movieRows.push(movieRow)
          })
          this.setState({rows: movieRows})
        }

      },
      error: (xhr, status, err) =>{
        console.log("movie data error")
      }
    })
  }

  searchChangeHandler(e) {
    console.log(e.target.value)
    const boundObject = this
    const searchterm = e.target.value
    boundObject.performSearch(searchterm)
  }

  render() {
    return (
    <div className="App">
      <header >
        <h1>Movie Search</h1>
      </header>
      <main className="mdc-top-app-bar--fixed-adjust">
        <h1>Enter a movie name</h1>
        <input className="searchbar" type="search" placeholder="Enter a movie name"
        onChange={this.searchChangeHandler.bind(this)}></input>
      </main>
      <div className="mrows">
        {this.state.rows}
      </div>
    </div>
    );
  }
}

export default App;
