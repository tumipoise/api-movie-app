import React from "react";
import image1 from "../images/image1.svg";
import { Link } from "react-router-dom";

const MovieList = () => {
  return (
    <div className="wrapper">
      <Link to="/1">
        <div className="movie">
          <img src={image1} className="movie__image" />
          <h2 className="movie__title">Onward</h2>
          <h3 className="movie__year">2020</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieList;
