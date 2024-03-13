import React from "react";
const baseurl = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {

  return (
    <img
      src={baseurl + movie.poster_path}
      alt="img"
      className={`w-[110px] 
      md:w-[200px] 
      rounded-lg 
      mt-5
      mb-5
      hover:border-[2px] hover:scale-110 transition-all ease-in duration-50`
    }
    />
  );
}

export default MovieCard;
