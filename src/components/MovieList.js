import MovieCard from "./MovieCard";
import styled from "styled-components";

const MovieList = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} id={movie.id} image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title} description={movie.overview} average={movie.vote_average} />;
      })}
      ;
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default MovieList;
