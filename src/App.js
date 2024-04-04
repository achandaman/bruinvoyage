import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Profile from './components/profile.js';
import Social from './components/social.js';
import Login from './components/login.js';
import Register from './components/register.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div>
        <Navbar />
        <div style={{ marginTop: '70px' }}></div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/social" element={<Social />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
      </div>
  )    
}

export default App;
