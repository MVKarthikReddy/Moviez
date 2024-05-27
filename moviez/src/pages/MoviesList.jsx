import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slice/movieSlice";
import GridContainer from "../components/GridContainer";
import MovieCard from "../components/MovieCard";
import Container from "../components/Container";
import Loader from "../components/Loader";
import SortByRating from "../components/SortByRating";
import { getSortedMoviesByRating } from "../utils";
import { HIGHEST } from "../utils/constant";

const MoviesList = () => {
  const [sortOption, setSortOption] = useState(HIGHEST);
  const dispatch = useDispatch();
  const { isLoading, movies, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const sortedMovies = getSortedMoviesByRating(sortOption, [...movies]);

  return (
    <>
      <Container>
        <div className="p-4 min-h-svh h-full bg-fixed  bg-no-repeat bg-cover bg-[url('https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg')]">
          <div className="flex items-center flex-row flex-wrap xs:justify-center justify-between">
            <h1 className="text-center text-black font-semibold text-3xl py-4">
              Movies List
            </h1>
            <SortByRating
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <GridContainer>
                {sortedMovies?.map((movie, idx) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
              </GridContainer>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default MoviesList;
