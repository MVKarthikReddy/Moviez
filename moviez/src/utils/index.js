import { HIGHEST } from "./constant";

export const checkMovieIsFav = (id, favMovies) => {
  return favMovies?.find((ele, idx) => ele.id == id);
};

export const getSortedMoviesByRating = (sortedBy, movies) => {
  return movies?.sort((a, b) =>
    sortedBy === HIGHEST ? b?.rating - a?.rating : a?.rating - b?.rating
  );
};
