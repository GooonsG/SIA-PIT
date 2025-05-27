import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Facebook, Instagram } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Family', id: 'family' },
    { name: 'Experience', id: 'experience' },
    { name: 'Interests', id: 'interests' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find the active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const headerClasses = isScrolled 
    ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
    : 'bg-transparent py-5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary-600 dark:text-primary-400">
          {personalInfo.name.split(' ')[0]}<span className="text-gray-800 dark:text-white">.sia</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                    activeSection === item.id 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div 
                      className="h-0.5 bg-primary-600 dark:bg-primary-400 mt-1"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href={personalInfo.social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.social.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href={personalInfo.social.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={`block py-2 text-base font-medium ${
                      activeSection === item.id 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={personalInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;