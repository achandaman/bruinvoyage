import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="bar">
      <div className="leftSection">
      </div>
      <div className="centerSpacing">
      </div>
      <div className="rightSection">
        <div className="links">
          <nav>
            <ul>
              <li><Link to="/map">Map</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/social">Social</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
  );
}

export default Navbar;