import React from "react";
import Axios from "axios";
import axios from "axios";

// for general movies
// sample-https://api.themoviedb.org/3//trending/all/day?api_key=254a95f51cabc74ef30f62e1a14918ab

const moviedburl = "https://api.themoviedb.org/3";
const apikey = "254a95f51cabc74ef30f62e1a14918ab"
const gettrandingvideos = Axios.get(moviedburl + "/trending/all/day?api_key=" + apikey);

// for movie by genre (type)
// sampl-https://api.themoviedb.org/3/discover/movie?api_key=254a95f51cabc74ef30f62e1a14918ab&with_genres=28 , here 28 is a gener id

const moviebygener = (id) =>{
    return Axios.get("https://api.themoviedb.org/3/discover/movie?api_key=254a95f51cabc74ef30f62e1a14918ab&with_genres="+id)
}

export default{
     gettrandingvideos,
     moviebygener
 }
