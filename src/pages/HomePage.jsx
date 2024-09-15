import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api';
import MovieCard from '../components/MovieCard';
import '../homePage.css'; // Import CSS file for HomePage styles

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="homepage">
      <h1 className="page-title">Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
  
// In this component, we use the MovieCard component to display a grid of popular movies. We fetch the popular movies from the API when the component loads using the useEffect hook. We then map over the movies array to render a MovieCard component for each movie.
  