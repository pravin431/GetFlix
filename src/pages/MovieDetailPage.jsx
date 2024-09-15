import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast } from '../api';
import '../movieDetail.css'; // Import the CSS file for styling

const MovieDetailPage = () => {
  const { movieId } = useParams(); // Extract movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  // Fetch movie details and cast when the component loads
  useEffect(() => {
    getMovieDetails(movieId)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });

    getMovieCast(movieId)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error('Error fetching movie cast:', error);
      });
  }, [movieId]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path || "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path || "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"}`;

  return (
    <div className="movie-detail-page">
      {/* Left side - Movie details */}
      <div className="movie-detail-left">
        <img src={posterUrl} alt={movie.original_title} className="movie-detail-poster" />
        <div className="movie-info-text">
          <h1 className="movie-title">{movie.original_title || "Venom: Let There Be Carnage"}</h1>
          <p className="movie-rating">Rating: {movie.vote_average?.toFixed(1) || 6.7}</p>
          <p className="movie-runtime">{movie.runtime || 97} min | {movie.genres?.map(g => g.name).join(', ') || 'Action, Adventure'}</p>
          <p className="movie-release">Release Date: {new Date(movie.release_date || '2021-09-30').toDateString()}</p>

          </div>
          <h3 className="overview-title">Overview</h3>
          <p className="movie-overview">{movie.overview || "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady..."}</p>
       
      </div>

      {/* Right side - Backdrop image */}
      <div className="movie-detail-right">
        <div className="backdrop-image" style={{ backgroundImage: `url(${backdropUrl})` }}></div>
      </div>

      {/* Cast section */}
      <div className="cast-section">
        <h2 className="cast-heading">Cast</h2>
        <div className="movie-cast-grid">
          {cast.map((actor) => (
            <div key={actor.cast_id} className="movie-cast-member">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="movie-cast-image"
              />
              <p className="cast-name">{actor.name}</p>
              <p className="cast-character">character: {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
