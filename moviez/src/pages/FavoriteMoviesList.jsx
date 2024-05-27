import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteMoviesList = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="container mx-auto p-4 bg-fixed  bg-no-repeat bg-cover bg-[url('https://img.lovepik.com/photo/20211202/medium/lovepik-young-friends-watching-movie-at-the-cinema-picture_501411384.jpg')]">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="bg-white p-4 shadow rounded">
              <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded" />
              <div className="mt-2">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500">
                  View on IMDb
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMoviesList;
