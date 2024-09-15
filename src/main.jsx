import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';  // Import the MovieDetailPage
import SearchResultsPage from './pages/SearchResultsPage';
import Navbar from './components/Navbar';
//  import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailPage />} /> {/* Add route for MovieDetailPage */}
        <Route path="/search/:query" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
