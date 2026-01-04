import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity">
            HL
          </Link>
          <div className="flex gap-8 text-sm">
            <Link 
              to="/" 
              className={`nav-link transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link transition-colors ${isActive('/projects') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Projects
            </Link>
            <Link 
              to="/experience" 
              className={`nav-link transition-colors ${isActive('/experience') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
