import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api';
import MovieCard from '../components/MovieCard';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  // Fetch top-rated movies when the component loads
  useEffect(() => {
    getTopRatedMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching top-rated movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No top-rated movies available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default TopRatedPage;
