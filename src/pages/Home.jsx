import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaArrowRight, FaCode, FaServer, FaDatabase,
  FaJava, FaLaptopCode, FaUserTie, FaAward, FaTrophy, FaMedal, FaEnvelope,
  FaGraduationCap, FaUniversity, FaChartBar,
  FaCalendarAlt, FaBrain, FaBriefcase,
} from 'react-icons/fa';

// Placeholder loading component
const LoadingPlaceholder = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-pulse bg-gray-200 rounded-lg h-32 w-full max-w-lg"></div>
  </div>
);

const Home = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Define section scroll animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Optimized simpler variants for mobile
  const simplifiedVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // Use window width to determine if on mobile
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Use simplified animations on mobile
  const getVariants = () => isMobile ? simplifiedVariants : sectionVariants;
  
  // Use simplified stagger on mobile
  const getContainerTransition = () => {
    return {
      staggerChildren: isMobile ? 0.1 : 0.3
    };
  };

  // Add scroll performance helper
  useEffect(() => {
    if (isMobile) {
      let scrollTimer;
      const body = document.body;
      
      const handleScroll = () => {
        if (!body.classList.contains('scrolling')) {
          body.classList.add('scrolling');
          body.classList.add('disable-hover-on-scroll');
        }
        
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          body.classList.remove('scrolling');
          body.classList.remove('disable-hover-on-scroll');
        }, 150);
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile]);

  // Coding profiles data
  const codingProfiles = [
    {
      name: 'LeetCode',
      username: 'nithyanandvk2005',
      url: 'https://leetcode.com/u/nithyanandvk2005/',
      icon: <FaBrain className="text-[#FFA116] text-2xl" />,
      stats: 'Solved 150+ DSA problems',
      description: 'Regularly practice algorithms and data structures, focusing on medium and hard problems.',
      color: 'from-yellow-50 to-orange-50 border-yellow-200',
      textColor: 'text-yellow-800',
      iconBg: 'bg-yellow-100',
      hoverColor: 'hover:border-yellow-300'
    },

    {
      name: 'GitHub',
      username: 'nithyanandvk',
      url: 'https://github.com/nithyanandvk',
      icon: <FaGithub className="text-black text-2xl" />,
      stats: '20+ repositories',
      description: 'Active contributor with various personal and collaborative projects, focusing on web applications.',
      color: 'from-gray-50 to-slate-50 border-gray-200',
      textColor: 'text-gray-800',
      iconBg: 'bg-gray-100',
      hoverColor: 'hover:border-gray-400'
    },

    {
      name: 'HackerRank',
      username: 'nithyanandvk2005',
      url: 'https://www.hackerrank.com/profile/nithyanandvk2005',
      icon: <FaLaptopCode className="text-[#2EC866] text-2xl" />,
      stats: '5-Star Java Badge',
      description: 'Achieved 5-star rating in Java, with expertise in problem-solving and algorithms challenges.',
      color: 'from-green-50 to-emerald-50 border-green-200',
      textColor: 'text-green-800',
      iconBg: 'bg-green-100',
      hoverColor: 'hover:border-green-300'
    },
  ];

  // Education data
  const education = [
    {
      degree: 'B-Tech in Computer Science Engineering',
      institution: 'Mohan Babu University, Tirupati',
      period: '2022 - 2026',
      location: 'Tirupati, India',
      gpa: '9.81/10',
      description: 'Specialized in Software Engineering with a strong focus on full-stack web development, algorithms, and emerging technologies.',
    },
    {
      degree: 'Intermediate',
      institution: 'Sai Sri Chaitanya Junior College, Palamaner',
      period: '2020 - 2022',
      location: 'Palamaner, India',
      gpa: '9.71/10',
      description: 'Completed Intermediate (MPC) at Sai Sri Chaitanya Junior College with 97.1%, securing Town Topper in 1st year.',
    },
    {
      degree: 'SSC',
      institution: 'Ravindra Bharathi School, Palamaner',
      period: '2020',
      location: 'Palamaner, India',
      gpa: '9.88/10',
      description: 'Completed 10th class at Ravindra Bharathi School with 98.8%, demonstrating consistent academic excellence.',
    }
  ];

  // Image loading optimization
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  
  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745323603/yjceqohqkgrbn0r8nchd.jpg";
    img.onload = () => setHeroImageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative z-10 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.5 : 1 }}
              className="w-full lg:w-1/2"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="inline-block py-1 px-3 mb-3 sm:mb-4 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                >
                  MERN | Java | 2X National AI Hackathon Winner
                </motion.span>
                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Welcome to <motion.span
                    className="text-blue-600"
                    animate={{
                      color: ["#2563eb", "#4f46e5", "#3b82f6", "#2563eb"],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >Nithyanand V K's</motion.span> Portfolio
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Hi there! I create elegant, high-performance web applications that solve real-world problems. Specializing in modern JavaScript frameworks and scalable architecture.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/contact"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white text-sm sm:text-base font-medium hover:bg-blue-700 transition-all shadow-md flex items-center justify-center"
                  >
                    Contact Me <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <div className="flex space-x-4 sm:space-x-5 items-center">
                  <motion.a
                    href="https://linkedin.com/in/nithyanandvk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors text-xl sm:text-2xl"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaLinkedin />
                  </motion.a>

                  <motion.a
                    href="mailto:nithyanandvk2005@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors text-xl sm:text-2xl"
                    aria-label="Email"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaEnvelope />
                  </motion.a>

                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.1 : 0.3 }}
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 mt-8 lg:mt-0"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative"
              >
                <motion.div
                  className="absolute -inset-4 bg-blue-100 rounded-full opacity-30 blur-xl"
                  animate={!isMobile ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <img
                  src="https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745323603/yjceqohqkgrbn0r8nchd.jpg"
                  alt="Nithyanand V K"
                  className={`relative rounded-full w-full max-w-md mx-auto object-cover aspect-square ${!heroImageLoaded && 'opacity-0'}`}
                  loading="eager"
                />
                {!heroImageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse"></div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section
        className="py-16 sm:py-20 bg-white relative z-10"
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
          >
            <motion.span
              className="inline-block py-1 px-3 mb-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium"
              whileHover={{ scale: isMobile ? 1.02 : 1.05, backgroundColor: "#dbeafe" }}
            >
              Expertise
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Skills & Technologies</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              A diverse set of skills and technologies I've mastered to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }}
            transition={getContainerTransition()}
          >
            {/* Frontend */}
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={isMobile ? {} : {
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6"
              }}
            >
              <motion.div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
                whileHover={isMobile ? {} : { rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCode className="text-xl sm:text-2xl" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Frontend</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <motion.li
                  className="flex items-center"
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: isMobile ? 0 : 0.1 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  HTML5, CSS3, JavaScript
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: isMobile ? 0.2 : 0.2 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Bootstrap, Tailwind CSS
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: isMobile ? 0.3 : 0.3 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  React
                </motion.li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6"
              }}
            >
              <motion.div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaServer className="text-xl sm:text-2xl" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Backend</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Node.js
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Express
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Restful APIs
                </motion.li>
              </ul>
            </motion.div>

            {/* Database */}
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6"
              }}
            >
              <motion.div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaDatabase className="text-xl sm:text-2xl" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Database</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  MongoDB & Mongoose
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  SQL Databases
                </motion.li>
              </ul>
            </motion.div>

            {/* Programming & DSA */}
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6"
              }}
            >
              <motion.div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaJava className="text-xl sm:text-2xl" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Programming & DSA</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Java Development
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Data Structures & Algorithms
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Problem Solving
                </motion.li>
              </ul>
            </motion.div>

            {/* Other Technical */}
            <motion.div
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6"
              }}
            >
              <motion.div
                className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLaptopCode className="text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Git & GitHub
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  VS Code
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Few AI Tools
                </motion.li>
              </ul>
            </motion.div>

            {/* Leadership & Soft Skills */}
            <motion.div
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6"
              }}
            >
              <motion.div
                className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaUserTie className="text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Team Leadership
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Event Organization
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Mentoring
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Communication
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements & Experience Section */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <motion.section
          className="py-20 bg-gray-50 relative z-10"
          variants={getVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.2 }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.6 }}
            >
              <span className="inline-block py-1 px-3 mb-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Milestones</span>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Achievements & Experience</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Recognitions, certifications, and professional journey that have shaped my career
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Certifications & Achievements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                  <FaMedal className="text-yellow-500 mr-4 text-3xl" />
                  Certifications & Achievements
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaTrophy className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">3rd Prize- AI Autonomous Hackathon 2025</h4>
                      <p className="text-blue-600 font-medium">V R Siddartha College</p>
                      <p className="text-gray-500 text-sm">2025</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaTrophy className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">Finalist- SASTRA Daksh 2025 Hackathon</h4>
                      <p className="text-blue-600 font-medium">SASTRA University</p>
                      <p className="text-gray-500 text-sm">2025</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaGraduationCap className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">Programming in Java by NPTEL</h4>
                      <p className="text-blue-600 font-medium">Top 5% & Silver Elite</p>
                      <p className="text-gray-500 text-sm">2024</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaGraduationCap className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">Data Structures & Algorithms in Java</h4>
                      <p className="text-blue-600 font-medium">NPTEL</p>
                      <p className="text-gray-500 text-sm">2024</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaGraduationCap className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">MERN Stack Web Development</h4>
                      <p className="text-blue-600 font-medium">Apna College</p>
                      <p className="text-gray-500 text-sm">2023</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaGraduationCap className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">Pearson Mepro English, Hindi Vidwan</h4>
                      <p className="text-blue-600 font-medium">Pearson, Hindi Prachar Sabha</p>
                      <p className="text-gray-500 text-sm">2023, 2020</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                      <FaChartBar className="h-6 w-6" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-800">CET Ranks</h4>
                      <p className="text-blue-600 font-medium">Andhra Pradesh- 5270, Telangana- 3359, Karnataka- 8905</p>
                      <p className="text-gray-500 text-sm">2022</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Professional Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                  <FaAward className="text-blue-500 mr-4 text-3xl" />
                  Professional Experience
                </h3>

                <div className="space-y-10">
                  <div className="relative border-l-2 border-blue-200 pl-8 pb-2">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Web Lead & Full Stack Developer</h4>
                      <p className="text-blue-600 font-medium">ISTE MBU & SVEC</p>
                      <p className="text-gray-500 text-sm mb-3">2023 - Present</p>
                      <p className="text-gray-600">Led the design and development of the official club website using MERN stack. We Integrated authentication, admin panel, and dynamic event management. Collaborated with faculty to promote and organize over 25+ events and earned recognition as Web Lead.</p>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-blue-200 pl-8 pb-2">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Web Lead & Technical Mentor</h4>
                      <p className="text-blue-600 font-medium">The Coding Club MBU</p>
                      <p className="text-gray-500 text-sm mb-3">2024 - Present</p>
                      <p className="text-gray-600">We are developing the Coding Club portal with dynamic UI/UX and event features. Mentored students in MERN stack, Java, Git and led coding events for 500+ participants. Contributed to increasing club registrations through active engagement and tech initiatives.</p>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-blue-200 pl-8 pb-2">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">GDSC Coordinator</h4>
                      <p className="text-blue-600 font-medium">Google Developer Student Club, MBU</p>
                      <p className="text-gray-500 text-sm mb-3">2023 - 2024</p>
                      <p className="text-gray-600">Promoted Google programs like Arcade and promoted various tech workshops on cloud, web development. Encouraged students to complete Google certifications.
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>
      </Suspense>

      {/* Open to Work Section - simplified but attractive */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-50 to-white relative z-10"
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center mb-5 bg-blue-100 p-4 rounded-full text-blue-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaBriefcase size={24} />
            </motion.div>
            <motion.h2
              className="text-3xl font-bold mb-3 text-gray-800 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-green-100 h-2 w-2 rounded-full inline-block animate-pulse"></span>
              Open to Work
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              I'm available for full-time positions, contract roles, freelance projects, and internships.
            </motion.p>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                <FaEnvelope />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Coding Profiles Section with enhanced UI - removed underline */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <motion.section
          className="py-20 bg-gradient-to-br from-gray-50 to-white relative z-10"
          variants={getVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.2 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-4 bg-blue-100 p-4 rounded-full text-blue-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLaptopCode size={24} />
              </motion.div>
              <motion.h2
                className="text-4xl font-bold mb-4 text-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                Coding Profiles
              </motion.h2>
              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Check out my coding journey and problem-solving skills across various platforms
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {codingProfiles.map((profile, index) => (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`rounded-xl shadow-md p-6 bg-gradient-to-br ${profile.color} border ${profile.hoverColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${profile.iconBg} p-3 rounded-full ${profile.textColor} mr-4`}>
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
                      <p className="text-gray-500 text-sm">@{profile.username}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className={`font-semibold ${profile.textColor} mb-2`}>{profile.stats}</p>
                    <p className="text-gray-600 text-sm">{profile.description}</p>
                  </div>

                  <motion.a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium inline-flex items-center text-sm hover:text-blue-700 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Profile
                    <motion.span
                      className="ml-1 opacity-0 group-hover:opacity-100"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </Suspense>

      {/* Education Section with enhanced UI - removed underline */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <motion.section
          className="py-20 bg-gradient-to-tr from-blue-50 to-white relative z-10"
          variants={getVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.2 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-4 bg-blue-100 p-4 rounded-full text-blue-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGraduationCap size={24} />
              </motion.div>
              <motion.h2
                className="text-4xl font-bold mb-4 text-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                Education
              </motion.h2>
              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                My academic journey that built the foundation for my technical expertise
              </motion.p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 * (index + 1) }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-blue-200 transition-all"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                          <FaUniversity className="text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                          <p className="text-blue-600 font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <FaCalendarAlt className="mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-0 md:ml-14">
                      <p className="text-gray-600 mb-4">{edu.description}</p>
                      {/* 
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <motion.span
                              key={i}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                              whileHover={{
                                backgroundColor: "#dbeafe",
                                color: "#2563eb",
                                y: -2
                              }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </Suspense>

      {/* Contact CTA Section */}
      <motion.section
        className="py-20 bg-blue-50 relative z-10"
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      >
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.7 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.5 }}
          >
            Ready to Start Your Next Project?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-10 text-lg text-gray-600"
            initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0 : 0.1 }}
          >
            I'm always looking for exciting opportunities to create exceptional digital experiences. Let's discuss how we can work together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0 : 0.2 }}
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home; 