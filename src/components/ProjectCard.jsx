import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index = 0 }) => {
  const { _id, id, title, summary, description, image, technologies, github, liveDemo } = project;
  const projectId = _id || id;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-200 hover:border-blue-200"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 xs:h-44 sm:h-48 md:h-52 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 sm:p-4 w-full">
            <div className="flex justify-end space-x-2 sm:space-x-3">
              <motion.a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="View GitHub Repository"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={16} />
              </motion.a>
              
              {liveDemo && (
                <motion.a 
                  href={liveDemo}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="View Live Demo"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt size={14} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        {project.featured && (
          <motion.div 
            className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium shadow-md"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            Featured
          </motion.div>
        )}
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-xs sm:text-sm">{summary || description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {technologies && technologies.slice(0, 4).map((tech, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                whileHover={{ 
                  y: -3, 
                  backgroundColor: "#dbeafe", 
                  color: "#2563eb" 
                }}
                className="bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </motion.span>
            ))}
            {technologies && technologies.length > 4 && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium"
              >
                +{technologies.length - 4} more
              </motion.span>
            )}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to={`/projects/${projectId}`}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-xs sm:text-sm bg-blue-50 hover:bg-blue-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg"
            >
              View Details
              <motion.span 
                className="ml-1"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "easeInOut" 
                }}
              >
                <FaArrowRight size={12} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;