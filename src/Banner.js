import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests';

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
    }
    fetchData();
}, []);




    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
  return (

    <header className='Banner'
     style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
    }}
    >
        <div className="Banner_contents">
            <h1 className="Banner_title"> 
            {movie?.title || movie?.name || movie?.original_name} 
            </h1>
            <div className="Banner_buttons">
                <button className="Banner_button">
                    Play</button>
                <button className="Banner_button">
                    My List</button>
                </div>
                <h1 className="Banner_description">
                    {truncate(movie?.overview,150)}
                </h1>

            </div>
            <div className="Banner--fadeBottom"/>


    </header>
  )
}

export default Banner