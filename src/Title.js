import React, { Component} from 'react';

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
    fetch(urlmovies)
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
    <div className="App">
        <h1>Movie Detail fetch</h1>
        {this.props.match.params.movieID}
    </div>
    );
  }
}

export default Title;
