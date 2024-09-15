import React from 'react';
import { Link } from 'react-router-dom';
import '../movieCard.css'; // Add a separate CSS file for MovieCard styles.

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={posterUrl} alt={movie.original_title} className="movie-poster" />
      </Link>
      <h3 className="movie-title">{movie.original_title}</h3>
      <p className="movie-rating">Rating: {movie.vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;

// In this component, we use the Link component from react-router-dom to create a link to the movie detail page for each movie. We also use the movie prop to display the movie poster, title, and rating.
