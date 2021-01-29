import React from 'react';

class movieRow extends React.Component{
  viewMovie(){
    console.log("view movie")
    console.log(this.props.movie)
    //const url = "http://www.omdbapi.com/?apikey=6285f627&t="+this.props.movie.Title;
    const url = "http://localhost:3000/title/"+this.props.movie.imdbID;
    window.location.href = url
  }
    render(){
        return <div key={this.props.movie.imdbID} className="card" > 
        <table>
        <tbody>
          <tr>
            <td>
              <img className="poster" alt="poster" src={this.props.movie.Poster}/>
            </td>
            <td>
              <h2>{this.props.movie.Title}</h2>
              <p className="overview">Year: {this.props.movie.Year}</p>
              <div className="actions">
                <input type="button" onClick={this.viewMovie.bind(this)} value="View Details"/>
              </div>
            </td>
          </tr>
        </tbody>
        </table> 
      </div>
    }
}

export default movieRow