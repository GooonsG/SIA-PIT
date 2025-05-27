import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { familyMembers } from '../data/familyData';

const FamilyBackground: React.FC = () => {
  return (
    <section id="family" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeading 
          title="Family Background" 
          subtitle="Meet the amazing people who have shaped my journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg h-64">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">
                  {member.relation}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                    Age: {member.age}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                    {member.occupation}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Family Values
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            My family has instilled in me the values of hard work, creativity, and perseverance. 
            From my mother's artistic eye for detail to my father's analytical approach to problem-solving, 
            I've inherited a unique blend of skills that serve me well in my career. My sister and I share 
            a passion for technology and often collaborate on personal projects, combining our complementary skills.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We have always emphasized the importance of continuous learning and embracing new challenges. 
            These values have shaped my approach to work and life, driving me to constantly improve and expand my skillset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyBackground;