import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class movieRow extends React.Component{
  
  viewMovie(){
    console.log("view movie")
    console.log(this.props.movie)
    const url = "http://localhost:3000/title/"+this.props.movie.imdbID;
    window.location.href = url
  }
  
    render(){
        return <div key={this.props.movie.imdbID} className="card" > 
        <Card className="root">
          <CardActionArea>
            <CardMedia
            className="media"
            image={this.props.movie.Poster}
            title={this.props.movie.Title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {this.props.movie.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary"  onClick={this.viewMovie.bind(this)} value="View Details">
            Details
            </Button>
          </CardActions>
        </Card>
      </div>
    }
}

export default movieRow