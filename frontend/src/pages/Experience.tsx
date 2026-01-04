import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Software Engineer',
      company: 'CarGurus Inc',
      period: 'May 2021 - Present',
      current: true,
      description: [
        'Working as a full-stack engineer in the Consumer Retention Team',
        'Developing API endpoints used for CarGurus website and mobile application',
        'Responsible for ensuring smooth running of microservices and other processes such as posting emails and notifications to consumers, iterable data synchronization, subscription growth and settings'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Charles River Development',
      period: 'Feb 2017 - May 2021',
      description: [
        'Developed, designed and tested various order and allocation related features for an investment management solution',
        'Performed code enhancements and bug fixes on an extremely low latency client and server-side application',
        'Responsible for the design and development of critical features such as crossing, send to trading parallel and allocation report functionalities'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Monster Worldwide',
      period: 'May - Aug 2016',
      description: [
        'Developed a service for tracking job advertisement transactions by using REST services to fetch information about job provider transactions',
        'Developed an application using AWS CloudWatch service to extract and process jobs data from Monster\'s AWS instances',
        'Implemented custom metrics to monitor performance and support better auto-scaling'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">Career</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Work <span className="font-serif italic">Experience</span>
          </h1>
          <div className="quote-line mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-16 max-w-2xl"
        >
          From building low-latency trading systems to consumer-facing web applications, 
          my career has been defined by a passion for solving complex problems with elegant solutions.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative pl-8"
        >
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="timeline-item relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="timeline-dot"></div>
              
              <div className="ml-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-400 rounded border border-green-500/20">
                        Current
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-white/20 mt-1.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
        >
          <h3 className="text-xl font-medium mb-2">Interested in working together?</h3>
          <p className="text-gray-400 mb-6">Let's connect and discuss opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hitesh.laware@example.com"
              className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/hitesh-l-aa3a72101"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-sm font-medium rounded hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
