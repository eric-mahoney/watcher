import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

async function getMovie(movieId) {
  const url = `http://localhost:3000/movie/${movieId}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  // use effect to fetch the data upon load
  useEffect(() => {
    getMovie(id).then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, []);
  return (
    <MovieContainer>
      <BackdropWrapper>
        <Backdrop src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
      </BackdropWrapper>
      <Flex>
        <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Details>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.runtime} min</p>
        </Details>
      </Flex>
    </MovieContainer>
  );
};

const MovieContainer = styled.div``;

const BackdropWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Backdrop = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: blur(5px);
  @media (max-width: 700px) {
    display: none;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 20px 0px;
  }
`;
const Details = styled.div``;

const Poster = styled.img`
  z-index: 999;
  width: 300px;
  margin: -150px 50px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media (max-width: 700px) {
    margin: 0;
  }
`;

export default Movie;
