import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';

const SearchResultsPage = () => {
  const { query } = useParams(); // Extract the search query from the URL
  const [movies, setMovies] = useState([]);

  // Fetch search results when the component loads or the query changes
  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [query]); // Re-run the effect when the query changes

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No results found for "{query}". Try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
