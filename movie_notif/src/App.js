import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    // this.performSearch("avengers");
    this.showTopMovies();
  }
  showTopMovies() {
    console.log("Default view")
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
    var futureDate = tempDate.getFullYear()+ 1 + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate(); // one year later
    console.log(date);
    const urlString = 'https://api.themoviedb.org/3/discover/movie?page=1&primary_release_date.gte=' + date + '&primary_release_date.lte=' + futureDate + '&include_video=false&include_adult=false&sort_by=popularity&sort_by=primary_release_date.dsc&language=en-US&api_key=a2facc0dc52093b2fe5fec21c6394b16'
    // const urlString = 'https://api.themoviedb.org/3/discover/movie?page=1&primary_release_date.gte=' + date + '&primary_release_date.lte=' + '2019-06-01' + '&include_video=false&include_adult=false&sort_by=popularity&sort_by=primary_release_date.dsc&language=en-US&api_key=a2facc0dc52093b2fe5fec21c6394b16'
    $.ajax({
      url: urlString,
      success: (discoverResults) => {
        console.log("Fetched data successfully")
        console.log(discoverResults)
        const results = discoverResults.results

        var movieRows = []

        results.forEach((movie) => {
          if(movie.poster_path != null) { // only those with movie posters can be discovered
            movie.poster_src = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
            console.log(movie.title)
            const movieRow = <MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          }
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }
  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=a2facc0dc52093b2fe5fec21c6394b16&page=1&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])
        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
          console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
  return (
    <div className="App">
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="50" src="green_movie_icon.svg"/>
            </td>
            <td width='8'></td>
            <td>
              <h1>MovieDB Notification</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input className="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
      {this.state.rows}
      
    
    </div>
  );
  }
}

export default App;
