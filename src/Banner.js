import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'
const base_url = "https://image.tmdb.org/t/p/original";
function Banner(){
    const [movie,setMovie] = useState([]);
    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length-1)
            ]));
            return request;

        }
        fetchData();
        
    },[]);
      const urltext = base_url+movie.backdrop_path;
        console.log(urltext);
        function truncate(str, n){
            return str?.length > n? str.substr(0,n-1)+"...":str;
        }

    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${urltext})`,
            
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie.original_name}</h1>
                  <div className = "banner_buttons">
                      <button className="banner_button">
                        Play
                      </button>
                      <button className="banner_button">
                          My List
                          </button>
    
                      </div>
                      <div className="banner_description" style={{maxWidth: "360px", marginTop: "20px"}}>
                          {truncate(movie?.overview, 500)}
                      </div>
                      </div>

                <div className="banner-fadeBottom" > 
                </div>

        </header>
    )
}

export default Banner;