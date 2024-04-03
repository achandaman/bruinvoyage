import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
      {/* <div>
        <li><Link to="/"><img src={logo} width='135px' height='50px' alt="logo"/></Link></li>
      </div> */}
      <div className="links">
          <ul id="navbartext">
            <li><Link to="/" style={{color:"black"}}>Home</Link></li>
            <li><Link to="/social" style={{color:"black"}}>Social</Link></li>
            <li><Link to="/profile" style={{color:"black"}}>Profile</Link></li>
            <li><Link to="/login" style={{color:"black"}}>Login</Link></li>
            <li><Link to="/register" style={{color:"black"}}>Register</Link></li>
          </ul>
      </div>
    </nav>
  )
};

export default Navbar;