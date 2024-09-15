import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

// Get Popular Movies
export const getPopularMovies = () =>
  axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

// Get Top Rated Movies
export const getTopRatedMovies = () =>
  axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

// Get Upcoming Movies
export const getUpcomingMovies = () =>
  axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );

// Get Movie Details by ID
export const getMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

// Get Movie Cast by ID
export const getMovieCast = (movieId) =>
  axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

// Search Movies
export const searchMovies = (query) =>
  axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
