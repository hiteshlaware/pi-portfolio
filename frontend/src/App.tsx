import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './index.css';

function App() {
  return (
    <Router>
      <div className="grain min-h-screen flex flex-col">
        <CursorGlow />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
