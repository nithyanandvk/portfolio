import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="inline-flex items-center justify-center mb-3 sm:mb-4 bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope size={20} className="sm:text-2xl" />
            </motion.span>
            <motion.h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Me</motion.h1>
          </motion.div>
          <motion.p
            className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'd love to hear from you! Feel free to reach out for project inquiries,
            collaborations, or just to say hello.
          </motion.p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-5 sm:p-8 md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-6 sm:mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:nithyanandvk2005@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm md:text-base lg:text-lg xl:text-xl break-all md:break-normal"
            >
              <motion.span
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mr-2 flex-shrink-0"
              >
                <FaEnvelope />
              </motion.span>
              nithyanandvk2005@gmail.com
            </motion.a>
          </motion.div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6 sm:my-8"></div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 sm:mb-4">Connect With Me</h3>
            <div className="flex justify-center space-x-4 sm:space-x-5">
              <motion.a
                href="https://linkedin.com/in/nithyanandvk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} className="sm:text-xl" />
              </motion.a>

              <motion.a
                href="mailto:nithyanandvk2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-600 text-white p-2.5 sm:p-3 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={18} className="sm:text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 