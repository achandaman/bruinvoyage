import './App.css';
import React from 'react';
import Navbar from './navbar.js';
import Map from './map.js';
import Profile from './profile.js';
import Social from './social.js';
import Login from './login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/map" element={<Map />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/social" element={<Social />} />
            <Route path="/" element={<Login />} />
          </Routes>
    </div>
  )    
}

export default App;
