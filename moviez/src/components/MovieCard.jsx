import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavorite,
  removeMovieFromFavorite,
} from "../store/slice/movieSlice";
import { checkMovieIsFav } from "../utils";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { id, image, imdb_url, movie, rating } = props;
  const { favMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const isFavorite = checkMovieIsFav(id, favMovies);
  const toggleFavorite = () => {
    isFavorite
      ? dispatch(removeMovieFromFavorite(id))
      : dispatch(addMovieToFavorite(props));
  };

  return (
    <div className="  max-w-[400px]  border relative overflow-hidden h-full flex flex-col gap-4 border-[#3f3f4666]  p-6 rounded-md bg-[var(secondary-bg)] text-white w-full bg-base-100 shadow-xl bg-black">
      <Link to={imdb_url} target="_blank">
        <img src={image} alt={movie} />
        <div className="card-body">
          <h2 className="text-lg font-medium text-white">{movie}</h2>
          <p>Rating : {rating}</p>
        </div>
      </Link>
      <button
        onClick={toggleFavorite}
        type="button"
        className="text-3xl  top-2 right-2 cursor-pointer absolute"
      >
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
    </div>
  );
};

export default MovieCard;
