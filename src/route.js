import React from "react";
import { Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

const BaseRouter = () => {
  return (
    <>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/single/:id" component={MovieDetails} />
    </>
  );
};

export default BaseRouter;
