import "./App.css";
import styled from "styled-components";
// components
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

async function getRecent() {
  const url = `http://localhost:3000/recent`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const data = getRecent().then((movie) => {
      setMovies(movie.results);
      console.log(movie.results);
    });
  }, []);
  return (
    <>
      <Navbar />
      <MainContainer>
        <h1>Recently Released</h1>
        <MovieList movies={movies} />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default App;
