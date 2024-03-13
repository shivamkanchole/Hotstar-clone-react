import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Disney_poster from "../../assets/Images/disney_poster.png";
import marvel_logo from "../../assets/Images/marvel.png";
import nationalG_logo from "../../assets/Images/nationalG.png";
import pixar_logo from "../../assets/Images/pixar.png";
import starwar_logo from "../../assets/Images/starwar.png";
import disney_vid from "../../assets/Videos/disney.mp4";
import marvel_vid from "../../assets/Videos/marvel.mp4";
import national_vid from "../../assets/Videos/national-geographic.mp4";
import pixar_vid from "../../assets/Videos/pixar.mp4";
import starwar_vid from "../../assets/Videos/star_wars.mp4";
import Container from "../Container/Container.jsx";
function Production() {
  const productionList = [
    {
      id: nanoid,
      image: Disney_poster,
      video: disney_vid,
    },
    {
      id: nanoid,
      image: marvel_logo,
      video: marvel_vid,
    },
    {
      id: nanoid,
      image: nationalG_logo,
      video: national_vid,
    },
    {
      id: nanoid,
      image: pixar_logo,
      video: pixar_vid,
    },
    {
      id: nanoid,
      image: starwar_logo,
      video: starwar_vid,
    },
  ];

  return (
    <div className="mt-4">
      <Container>
        <div className="flex gap-2 md:gap-6">
          {productionList.map((product) => (
            <div className="border-[1px] md:border-[2px] border-gray-300 rounded-lg object-left-top overflow-hidden relative">
              <video
                src={product.video}
                autoPlay
                loop
                playsInline
                muted
                className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-70"
              />
              <img src={product.image} className="w-full z-[1] opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Production;
