import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">© 2026 Hitesh Laware. Built with passion.</p>
          <div className="flex gap-6">
            <a 
              href="https://github.com/hlaware" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/hiteshlaware" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:hitesh.laware@example.com" 
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
