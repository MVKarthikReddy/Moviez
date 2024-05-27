import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, toggleFavorite } from '../redux/slices';
import { Link } from 'react-router-dom';


const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const favorites = useSelector((state) => state.movies.favorites);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
    else{
      // console.log(status)
      console.log('hello')
    }
  }, [status, dispatch]);

  const handleFavorite = (movie) => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-black p-4 shadow rounded">
              {'../'+movie.image}
              <img src={'../images/shawshank.jpg'} alt={movie.title} className="w-full h-64 object-cover rounded" />
              <div className="mt-2">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <button
                  onClick={() => handleFavorite(movie)}
                  className={`mt-2 ${favorites.find((fav) => fav.id === movie.id) ? 'text-red-500' : 'text-black'}`}
                >
                  {favorites.find((fav) => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
                </button>
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500">
                  View on IMDb
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      {status === 'failed' && <p>Failed to load movies.</p>}
    </div>
  );
};

export default MovieList;
