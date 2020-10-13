import React from "react";
import image1 from "../images/image1.svg";

function MovieDetails() {
  return (
    <div className="wrappper2">
      <div className="movie-left">
        <img src={image1} />
      </div>
      <div className="text-right">
        <h2 className="movie-title">Blade runner 2040</h2>
        <h6 className="movie-year">2020</h6>
        <h6 className="movie-brief">
          Action / Drama / Mystery / Sci-Fi / Thriller
        </h6>
        <p className="movie-details">
          Thirty years after the events of Blade Runner (1982), a new Blade
          Runner, L.A.P.D. Officer "K" (Ryan Gosling), unearths a long-buried
          secret that has the potential to plunge what's left of society into
          chaos. K's discovery leads him on a quest to find Rick Deckard
          (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing
          for thirty years.
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
