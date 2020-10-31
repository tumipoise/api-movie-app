import React, { useState, useEffect } from "react";
// import axios from "axios";

import SingleMovie from "./SingleMovie";
import Loader from "./Loader";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          "https://yts.mx/api/v2/list_movies.json?quality=3D"
        );
        const response = await res.json();
        setMovies(() => {
          return response.data.movies;
        });
      } catch (e) {
        return setError(e);
      }
    };
    fetchMovie();
  }, [setMovies, setError]);

  if (movies.length === 0 || movies === undefined) {
    return <Loader />;
  } else {
    return movies.map((movie) => {
      return <SingleMovie movies={movie} />;
    });
  }
}

export default MovieList;
