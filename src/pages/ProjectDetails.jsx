import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { getProjectById } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = getProjectById(id);
    
    if (projectData) {
      setProject(projectData);
    } else {
      // If project not found, navigate back to projects page
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const { image, title, featured, technologies, description, summary, github, liveDemo } = project;

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <Link
              to="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft className="mr-2" /> Back to Projects
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-80 object-cover"
              />
              {featured && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Project
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>

              {/* Tech Stack */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2">About This Project</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {description || summary}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                {liveDemo && (
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails; 