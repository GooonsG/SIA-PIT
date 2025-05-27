import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="Here you will find information about me, my skills, and my education"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Personal Information
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Contact Details
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Name:</span> {personalInfo.name}
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Age:</span> {personalInfo.age}
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Location:</span> {personalInfo.location}
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Email:</span> {personalInfo.email}
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Phone:</span> {personalInfo.phone}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Education
                  </h4>
                  <ul className="space-y-4">
                    {personalInfo.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        <div className="font-semibold">{edu.degree}</div>
                        <div>{edu.institution}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Skills & Expertise
            </h3>
            
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                As a frontend developer, I've honed my skills across various technologies and tools
                to create engaging and responsive web applications.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {personalInfo.skills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                What I Do
              </h3>
              
              <ul className="space-y-4">
                <motion.li 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <span className="text-lg font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Web Development</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Building responsive, performant websites and web applications with modern technologies.
                    </p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <span className="text-lg font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">UI/UX Design</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Creating intuitive user interfaces and experiences that are both functional and visually appealing.
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;