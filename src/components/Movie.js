import React, { useEffect } from "react";
import axios from "axios";

const movieDetails = [
  {
    id: 1,
    image: "https://yts.mx/assets/images/movies/el_topo_1970/medium-cover.jpg",
    title: "El Topo",
    year: 1970,
  },
  {
    id: 2,
    image: "https://yts.mx/assets/images/movies/el_topo_1970/medium-cover.jpg",
    title: "El Topo",
    year: 1970,
  },
  {
    id: 3,
    image: "https://yts.mx/assets/images/movies/el_topo_1970/medium-cover.jpg",
    title: "El Topo",
    year: 1970,
  },
  {
    id: 4,
    image: "https://yts.mx/assets/images/movies/el_topo_1970/medium-cover.jpg",
    title: "El Topo",
    year: 1970,
  },
];

const movie = movieDetails.map((movie) => (
  <div>
    <div className="image">
      <img src={movie.image} />
    </div>
    <div className="title">{movie.title}</div>
    <div className="year">{movie.year}</div>
  </div>
));

function Movie() {
  useEffect(async () => {
    const result = await axios(
      "https://yts.mx/api/v2/list_movies.json?quality=3D"
    );
    // this.setData(result);
    console.log(result);
  });
  return (
    <div className="movies">{movie}</div>
    )
   
}




export default Movie;
