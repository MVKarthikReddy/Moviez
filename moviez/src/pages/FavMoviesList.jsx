import React from "react";
import { useSelector } from "react-redux";
import GridContainer from "../components/GridContainer";
import MovieCard from "../components/MovieCard";
import Container from "../components/Container";

const FavMoviesList = () => {
  const { favMovies } = useSelector((state) => state.movies);
  return (
    <Container>
      <div className="p-4 min-h-svh h-full">
        <h1 className="text-center text-black font-semibold text-3xl py-4">
          Favorite Movies List
        </h1>
        {favMovies.length === 0 && (
          <h2 className="text-white font-semibold text-center text-2xl py-5">
            Favorite Movie is Empty
          </h2>
        )}
        <GridContainer>
          {favMovies?.map((movie, idx) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </GridContainer>
      </div>
    </Container>
  );
};

export default FavMoviesList;
