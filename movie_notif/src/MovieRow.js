import React, { Component } from 'react';


class MovieRow extends React.Component {
    viewMovie() {
        // console.log("Notify me!")
        // console.log(this.props.movie.title)
        const url = "http://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td><img alt="poster" width="200" src={this.props.movie.poster_src}/></td>
            <td>
            <h3>{this.props.movie.title}</h3> 
            <h4>Release Date: {this.props.movie.release_date}</h4> 
            <p>{this.props.movie.overview}</p> 
            <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
        </table>
        
    }
}
export default MovieRow