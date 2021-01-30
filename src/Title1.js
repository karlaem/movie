import React, { Component} from 'react';
import $ from 'jquery';

const credentials = require('./credentials.json');

class Title extends Component{
  
  constructor(props){
    super(props)
    //console.log(props)
    //console.log(this.props.match.params.movieID)

    this.performSearch(this.props.match.params.movieID) 
  }
  performSearch(searchID) {
    console.log("search using moviedb");
    console.log(searchID);
    const urlmovies ='http://www.omdbapi.com/?apikey='+credentials.imdb.apikey+'&i='+ searchID;
    $.ajax({
      url: urlmovies,
      success:(searchResults) =>{
        console.log("movie data fetched correctly")
        //console.log(searchResults)
        const results = searchResults;
        //console.log(results[0])

        if(results){
         const movie = results;   
         console.log(movie)
        }

      },
      error: (xhr, status, err) =>{
        console.log("movie data error")
      }
    })
  }

  render() {
    return (
    <div className="App">
        <h1>Movie Detail</h1>
        {this.props.match.params.movieID}

    </div>
    );
  }
}

export default Title;
