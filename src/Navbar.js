import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-brand-link">TravelSite</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/search" className="nav-link">Search Tours</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
