import React from 'react';
import './App.css';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;