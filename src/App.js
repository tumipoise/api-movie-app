import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import Movie from './components/Movie'

const url = {
  url : "https://yts.mx/api/v2/list_movies.json?quality=3D"
}

class App extends Component{
  render() {
    return (
      <div>
       <Movie />
      </div>
    )
  }
}

export default App;
