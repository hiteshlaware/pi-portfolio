import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm tracking-widest uppercase mb-4"
            >
              Senior Software Engineer
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-light tracking-tight mb-6"
            >
              Hitesh<br />
              <span className="font-serif italic">Laware</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="quote-line"></div>
              <p className="text-gray-400 text-lg font-light max-w-md font-serif italic">
                "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-sm mb-8 max-w-md leading-relaxed"
            >
              — Aristotle
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <Link 
                to="/projects" 
                className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                to="/about" 
                className="px-6 py-3 border border-white/20 text-sm font-medium rounded hover:bg-white/5 transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden border border-white/10">
                <img 
                  src="/profile.jpeg" 
                  alt="Hitesh Laware" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/5 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
