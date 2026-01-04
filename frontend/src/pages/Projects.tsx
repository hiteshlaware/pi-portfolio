import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  year: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Automated Release Notes',
      description: 'An open source Java plugin developed for Mingle Analytics, a Maine-based software startup. The plugin integrates with TeamCity and Visual Studio Team Services to automatically generate release notes containing build and commit details, then emails them to users.',
      tech: ['Java', 'TeamCity', 'VSTS', 'Email Integration'],
      link: 'https://github.com/Automated-Release-Notes',
      year: '2016'
    },
    {
      title: 'Smart Car',
      description: 'A self-driving mini smart car integrated with multiple sensors via Arduino and Raspberry Pi. The system collects and processes physical data of the racing track in real time, with a web interface that controls the car, displays its current location, and publishes a video stream.',
      tech: ['Arduino', 'Raspberry Pi', 'Python', 'Web Development', 'IoT'],
      link: 'https://github.com/EC544_Group4',
      year: '2015'
    },
    {
      title: 'Jitsi Android App (BU-Service)',
      description: 'A video conferencing application built using WebRTC open framework. The app uses MySQL for user data storage and AWS for hosting the video bridge (EC2) and database (S3), with elastic IP implementation for scalability.',
      tech: ['Android', 'WebRTC', 'MySQL', 'AWS EC2', 'AWS S3'],
      year: '2015'
    },
    {
      title: 'Object Identification & Sorting using PLC',
      description: 'A comprehensive study of industrial sensors used to identify different types of objects. Developed a user-driven PLC application capable of sorting objects based on their physical properties.',
      tech: ['PLC Programming', 'Industrial Sensors', 'Automation'],
      year: '2014-15'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Selected <span className="font-serif italic">Projects</span>
          </h1>
          <div className="quote-line mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-12 max-w-2xl"
        >
          A collection of projects that showcase my journey from hardware integration 
          to full-stack development. Each project represents a unique challenge and learning experience.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{project.year}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Want to see more?</p>
          <a
            href="https://github.com/hlaware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-sm font-medium rounded hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
