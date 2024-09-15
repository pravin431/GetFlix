import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api';
import MovieCard from '../components/MovieCard';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);

  // Fetch upcoming movies when the component loads
  useEffect(() => {
    getUpcomingMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching upcoming movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No upcoming movies available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingPage;
