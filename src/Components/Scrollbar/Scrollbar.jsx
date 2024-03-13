import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../APIservices/GlobelAPI";
import { Container } from "../index";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const baseurl = "https://image.tmdb.org/t/p/original";
function Scrollbar() {
  const [movielist, setmovielist] = useState([]);
  const elementref = useRef();
  const screensize = window.innerWidth;
  useEffect(() => {
    GlobalApi.gettrandingvideos.then((res) => setmovielist(res.data.results))
  }, []);

  const Slideleft = (element) => {
    element.scrollLeft -= screensize - 85;
  };
  const Slideright = (element) => {
    element.scrollLeft += screensize - 85;
  };
  // console.log(movielist);

  return (
    <div>
      <Container>
        <div>
          <SlArrowLeft
            className="hidden md:block text-3xl absolute mt-[155px] mx-6"
            onClick={() => Slideleft(elementref.current)}
          />
          <SlArrowRight
            className="hidden md:block text-3xl absolute mt-[155px] mx-6 right-12"
            onClick={() => Slideright(elementref.current)}
          />
          <div
            className="flex overflow-x-auto scrollbar-hide mt-10 px-13 scroll-smooth"
            ref={elementref}
          >
            {movielist.map((movie) => (
              <img
                src={baseurl + movie.backdrop_path}
                alt="IMG"
                className="min-w-full md:h-[310px] object-cover object-left-top hover:border-[4px] border-gray-400"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Scrollbar;
