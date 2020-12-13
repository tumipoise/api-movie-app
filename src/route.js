import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

const BaseRouter = () => {
  return (
    <>
      <div className="row pt-5">
        <Route exact path="/" component={MovieList} />
      </div>
      <Route path="/movies/single/:id" component={MovieDetails} />
    </>
  );
};

export default BaseRouter;
