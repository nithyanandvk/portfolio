import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaLinkedin size={16} />, url: "https://linkedin.com/in/nithyanandvk", label: "LinkedIn" },
    { icon: <FaEnvelope size={16} />, url: "mailto:nithyanandvk2005@gmail.com", label: "Email" },
    { icon: <FaGithub size={16} />, url: "https://github.com/nithyanandvk", label: "GitHub" }
  ];
  
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 py-5 border-t border-gray-200 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-4 -top-5 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FaArrowUp />
      </motion.button>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2">
          {/* Logo and Copyright */}
          <div className="mb-4 sm:mb-0 flex items-center">
            <motion.div 
              className="mr-3 text-blue-600"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <FaCode size={20} />
            </motion.div>
            <div>
              <p className="font-medium mb-1">Nithyanand V K</p>
              <p className="text-xs text-gray-500">© {currentYear} All Rights Reserved</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-4 mb-4 sm:mb-0 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Made with love */}
        <motion.div
          className="text-center text-xs text-gray-500 mt-2 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.span 
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with 
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
              className="mx-1"
            >
              <FaHeart className="text-red-500 inline-block" />
            </motion.div> 
            by Nithyanand V K
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 