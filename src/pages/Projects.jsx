import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';

const Projects = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-3 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaProjectDiagram size={24} />
            </motion.span>
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-4"
              animate={{
                scale: [1, 1.03, 1],
                transition: { duration: 1.5, repeat: 0 }
              }}
            >
              My Projects
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Browse through my portfolio of projects, showcasing my skills in web development,
            design, and problem-solving.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 