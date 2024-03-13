import React from "react";
const baseurl = "https://image.tmdb.org/t/p/original";

function HorizontalMovieCard({movie}) {
  return (
    <img
      src={baseurl + movie.backdrop_path}
      alt="img"
      className={`w-[150px] 
      md:w-[250px] 
      rounded-lg 
      mt-5
      mb-5
      hover:border-[2px] hover:scale-110 transition-all ease-in duration-50`}
    />
  );
}

export default HorizontalMovieCard;
