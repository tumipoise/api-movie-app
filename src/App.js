import React, { Component } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import BaseRouter from "./route";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <BaseRouter></BaseRouter>
        </div>
      </Router>
    );
  }
}

export default App;
