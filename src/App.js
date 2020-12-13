import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseRouter from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <BaseRouter></BaseRouter>
    </Router>
  );
}

export default App;



