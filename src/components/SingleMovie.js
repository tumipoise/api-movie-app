import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SingleMovie(props) {
  const { id, medium_cover_image, title, year, title_long } = props.movies;
  return (
    <Link to={`/movies/single/${id}`} className="movie-link">
      <div className=" movie text-light">
        <img
          src={medium_cover_image}
          className="movie__image"
          alt={title_long}
        />
        <h2 className="movie__title">{title}</h2>
        <h3 className="movie__year">{year}</h3>
      </div>
    </Link>
  );
}

export default SingleMovie;
