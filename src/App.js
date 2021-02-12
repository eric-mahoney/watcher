import "./App.css";
import styled from "styled-components";

// components
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";

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
    <Router>
      <Navbar />
      <MainContainer>
        <Switch>
          <Route path="/" exact>
            <h1>Recently Released</h1>
            <MovieList movies={movies} />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default App;
