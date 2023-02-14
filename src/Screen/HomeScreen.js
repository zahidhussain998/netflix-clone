import React from "react";
import Banner from "../Banner";
import Row from "../features/Row";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} />
      
      
    </div>
  );
}

export default HomeScreen;
