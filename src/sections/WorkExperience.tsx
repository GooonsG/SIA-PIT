import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { workExperiences } from '../data/workExperience';

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and the skills I've developed along the way"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
          
          {workExperiences.map((job, index) => (
            <motion.div 
              key={job.id}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              }`}
              style={{ 
                width: '100%',
                maxWidth: '600px',
                marginLeft: index % 2 === 0 ? '0' : 'auto',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 z-10">
                <Briefcase size={20} />
              </div>
              
              <div className={`card p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="flex items-center gap-4 mb-4 flex-wrap justify-start md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {job.duration}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {job.company} • {job.location}
                </h4>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">Responsibilities:</h5>
                  <ul className={`space-y-1 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="block w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;