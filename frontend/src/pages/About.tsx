import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = {
    languages: ['Java', 'Python', 'C#', 'C++', 'SQL', 'JavaScript'],
    web: ['ReactJS', 'Spring', 'Node.js', 'Flask', '.NET', 'HTML/CSS'],
    tools: ['AWS', 'Kafka', 'MySQL', 'REST APIs', 'JSON', 'XML']
  };

  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            The <span className="font-serif italic">Journey</span>
          </h1>
          <div className="quote-line mb-12"></div>
        </motion.div>

        {/* Journey narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-gray-400 leading-relaxed mb-16"
        >
          <p className="text-lg">
            My journey into software engineering began in Mumbai, where I pursued a degree in 
            Instrumentation Engineering. It was during those formative years that I discovered 
            my passion for building things that work — not just circuits, but software systems 
            that solve real problems.
          </p>
          
          <p>
            That curiosity led me across the ocean to Boston University, where I earned my 
            Master's in Computer Engineering. The transition from hardware to software felt 
            natural — both require precision, creativity, and an understanding of complex systems.
          </p>
          
          <p>
            Since then, I've had the privilege of working with incredible teams at companies 
            like Monster Worldwide, Charles River Development, and now CarGurus. Each role has 
            taught me something new: the importance of scalable architecture, the art of writing 
            maintainable code, and the value of building systems that serve millions of users.
          </p>
          
          <p>
            Today, I focus on full-stack development, building everything from low-latency 
            trading systems to consumer-facing web applications. I believe in writing code 
            that's not just functional, but elegant — code that future developers will thank 
            you for.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-xl font-medium mb-6 text-gray-300">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] card-hover">
              <p className="text-white font-medium mb-1">MS, Computer Engineering</p>
              <p className="text-gray-500 text-sm mb-2">Boston University • 2015-2017</p>
              <p className="text-gray-400 text-sm">GPA: 3.73</p>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] card-hover">
              <p className="text-white font-medium mb-1">BE, Instrumentation Engineering</p>
              <p className="text-gray-500 text-sm mb-2">Mumbai University • 2011-2015</p>
              <p className="text-gray-400 text-sm">GPA: 3.5</p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl font-medium mb-6 text-gray-300">Skills</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-3">Web & Frameworks</p>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-3">Tools & Technologies</p>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-xl font-medium mb-6 text-gray-300">Accomplishments</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-1">◆</span>
              <span>Awarded best sophomore R&D project by University of Mumbai (2012-13)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30 mt-1">◆</span>
              <span>Chairperson of the IEEE student branch at VES Institute of Technology</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
