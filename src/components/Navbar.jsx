import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navbar.css'; // Import the CSS for Navbar

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>GetFlix</h1>
      </div>
      <div className="navbar-links">
        <ul className="nav-menu">
          <li><Link to="/">Popular</Link></li>
          <li><Link to="/top-rated">Top Rated</Link></li>
          <li><Link to="/upcoming">Upcoming</Link></li>
        </ul>
        <input
          type="text"
          placeholder="Search Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
