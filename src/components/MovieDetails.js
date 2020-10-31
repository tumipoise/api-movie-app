import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${props.match.params.id}`
      );
      const response = await res.json();

      setMovieDetails(() => {
        return response.data.movie;
      });
    };
    fetchMovieDetails();
  });
  if (Object.keys(movieDetails).length === 0 || movieDetails === undefined) {
    return <Loader />;
  } else {
    const {
      medium_cover_image,
      title,
      year,
      description_intro,
      genres,
    } = movieDetails;
    return (
      <div className="wrapper2">
        <div className="left">
          <img src={medium_cover_image} alt="Movie" className="img2" />
        </div>
        <div className="right">
          <h2 className="movie-title2">{title}</h2>
          <h6 className="movie-year2">{year}</h6>
          <h6 className="movie-brief2">{genres}</h6>
          <p className="movie-details2">{description_intro}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
