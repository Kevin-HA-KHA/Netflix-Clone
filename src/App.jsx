import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Les Originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="En Tendances" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Films d'Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Films d'Horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Films de Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
