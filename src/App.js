// 7aae87a5404509f6910be7133f4b20f5
// https://api.themoviedb.org/3/movie/550?api_key=7aae87a5404509f6910be7133f4b20f5
import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './requests';

function App() {
  return (
    <div className="App">
    {/* Navbar, header */}
    <Banner />
      
      <Row 
          title="NETFLIX ORIGINALS" 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
