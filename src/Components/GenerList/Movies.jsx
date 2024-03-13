import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../../APIservices/GlobelAPI.jsx";
import MovieCard from "./MovieCard.jsx";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { FcNext } from "react-icons/fc";
import HorizontalMovieCard from "./HorizontalMovieCard.jsx";

function Movies({ item, index1 }) {
  const [MovieList, setMovieLists] = useState([]);
  const elementRef = useRef(null);
  const [Expand, setExpand] = useState(false);

  useEffect(() => {
    GlobalApi.moviebygener(item.id).then((resp) => {
      setMovieLists(resp.data.results);
    });
  }, []);

  console.log(MovieList[0]);

  const slideRight = (element) => {
    element.scrollLeft += 800;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 800;
  };

  const Expand1 = () => {
    console.log("expand");
    setExpand(!Expand);
  };
  return (
    <div className=" relative">
      <div className="flex items-center text-2xl w-[110px] md:w-[260px] mt-2 gap-1">
        <p>{item.name}</p>
        {Expand && (
          <p className="text-sm mt-2 transition-all ease-linear duration-300">
            Expand All
          </p>
        )}
        <FcNext onClick={Expand1} className="mt-2" />
      </div>

      <IoChevronBackOutline
        className={`${
          Expand ? "md:hidden" : null
        } hidden md:block  text-3xl absolute ${index1%3==0?"mt-[155px]":"mt-[80px]"} mx-6 hover:size-12`}
        onClick={() => slideLeft(elementRef.current)}
      />
      <IoChevronForwardOutline
        className={`${
          Expand ? "md:hidden" : null
        } hidden md:block text-3xl absolute ${index1%3===0?"mt-[155px] right-2":"mt-[80px] right-0"} hover:size-12`}
        onClick={() => slideRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        // className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 md:px-10 sm:px-7"
        className={`${
          Expand
            ? `${index1%3===0?"gap-7":"gap-5"} flex flex-wrap md:px-10 sm:px-7 `
            : "flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 md:px-10 sm:px-7 "
        }`}
      >
        {index1 % 3 === 0
          ? MovieList.map((item) => <MovieCard movie={item} className="z-5" />)
          : MovieList.map((item) => (
              <HorizontalMovieCard movie={item} className="z-5" />
            ))}
      </div>
    </div>
  );
}

export default Movies;
