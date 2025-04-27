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

// Define a component to conditionally render motion or static div based on device
const MobileAwareMotion = ({ children, isMobile, className, ...props }) => {
  if (isMobile) {
    // On mobile, render static div with immediate visibility
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
  
  // On desktop, use motion with animations
  return (
    <motion.div 
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Define a similar component for sections
const MobileAwareSection = ({ children, isMobile, className, ...props }) => {
  if (isMobile) {
    return (
      <section className={className}>
        {children}
      </section>
    );
  }
  
  return (
    <motion.section 
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  // Use window width to determine if on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (window.innerWidth < 768) {
      // For mobile devices, add a class to the body to control animations
      document.body.classList.add('mobile-optimized');
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('mobile-optimized');
    };
  }, []);

  // Define animation variants - simplified for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5 }
    }
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  // Get viewport settings
  const getViewport = () => ({
    once: true,
    amount: isMobile ? 0.01 : 0.1,  // Reduce amount for mobile to trigger sooner
    margin: isMobile ? "10px" : "-50px 0px -50px 0px"  // Smaller margin for mobile
  });

  // Mobile-friendly variants that don't cause layout shifts
  const mobileItemVariants = {
    hidden: { opacity: 0.9 },  // Start nearly visible
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  // Use appropriate variants based on device
  const getItemVariants = () => isMobile ? mobileItemVariants : itemVariants;

  // On mobile, don't use staggering which can cause empty spaces
  const getMobileContainerVariants = () => ({
    hidden: { opacity: 0.9 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    }
  });

  // Choose container variants based on device
  const getContainerVariants = () => isMobile ? getMobileContainerVariants() : containerVariants;
  
  // Image loading optimization
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  
  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745323603/yjceqohqkgrbn0r8nchd.jpg";
    img.onload = () => setHeroImageLoaded(true);
  }, []);

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

  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative z-10 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className="inline-block py-1 px-3 mb-3 sm:mb-4 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium"
                >
                  MERN | Java | 2X National AI Hackathon Winner
                </span>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800"
                >
                  Welcome to <span
                    className="text-blue-600"
                  >Nithyanand V K's</span> Portfolio
                </h1>
                <p
                  className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed"
                >
                  Hi there! I create elegant, high-performance web applications that solve real-world problems. Specializing in modern JavaScript frameworks and scalable architecture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white text-sm sm:text-base font-medium hover:bg-blue-700 transition-all shadow-md flex items-center justify-center"
                  >
                    Contact Me <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <div className="flex space-x-4 sm:space-x-5 items-center">
                  <a
                    href="https://linkedin.com/in/nithyanandvk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors text-xl sm:text-2xl"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="mailto:nithyanandvk2005@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors text-xl sm:text-2xl"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 mt-8 lg:mt-0"
            >
              <div
                className="relative"
              >
                <div
                  className="absolute -inset-4 bg-blue-100 rounded-full opacity-30 blur-xl"
                ></div>
                <img
                  src="https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745762659/jabyhn8cms4z7ivhzkax.png"
                  alt="Nithyanand V K"
                  className={`relative rounded-full w-full max-w-md mx-auto object-cover aspect-square ${!heroImageLoaded && 'opacity-0'}`}
                  loading="eager"
                />
                {!heroImageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse"></div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <MobileAwareSection
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={getViewport()}
        className="py-20 sm:py-24 md:py-28 bg-white relative z-10"
        isMobile={isMobile}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <MobileAwareMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={getViewport()}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 sm:mb-20"
            isMobile={isMobile}
          >
            <span
              className="inline-block py-1 px-3 mb-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium"
            >
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Skills & Technologies</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              A diverse set of skills and technologies I've mastered to deliver exceptional results
            </p>
          </MobileAwareMotion>

          <MobileAwareMotion
            variants={getContainerVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport()}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto"
            isMobile={isMobile}
          >
            {/* Frontend */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              isMobile={isMobile}
            >
              <div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
              >
                <FaCode className="text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Frontend</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  HTML5, CSS3, JavaScript
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Bootstrap, Tailwind CSS
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  React
                </li>
              </ul>
            </MobileAwareMotion>

            {/* Backend */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              isMobile={isMobile}
            >
              <div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
              >
                <FaServer className="text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Backend</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Node.js
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Express
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Restful APIs
                </li>
              </ul>
            </MobileAwareMotion>

            {/* Database */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              isMobile={isMobile}
            >
              <div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
              >
                <FaDatabase className="text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Database</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  MongoDB & Mongoose
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  SQL Databases
                </li>
              </ul>
            </MobileAwareMotion>

            {/* Programming & DSA */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              isMobile={isMobile}
            >
              <div
                className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600"
              >
                <FaJava className="text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Programming & DSA</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Java Development
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Data Structures & Algorithms
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2"></span>
                  Problem Solving
                </li>
              </ul>
            </MobileAwareMotion>

            {/* Other Technical */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              isMobile={isMobile}
            >
              <div
                className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600"
              >
                <FaLaptopCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Git & GitHub
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  VS Code
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Few AI Tools
                </li>
              </ul>
            </MobileAwareMotion>

            {/* Leadership & Soft Skills */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              isMobile={isMobile}
            >
              <div
                className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600"
              >
                <FaUserTie className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Team Leadership
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Event Organization
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Mentoring
                </li>
                <li
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Communication
                </li>
              </ul>
            </MobileAwareMotion>
          </MobileAwareMotion>
        </div>
      </MobileAwareSection>

      {/* Achievements & Experience Section */}
      <MobileAwareSection
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={getViewport()}
        className="py-20 bg-gray-50 relative z-10"
        isMobile={isMobile}
      >
        <div className="container mx-auto px-6">
          <MobileAwareMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={getViewport()}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
            isMobile={isMobile}
          >
            <span className="inline-block py-1 px-3 mb-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Milestones</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Achievements & Experience</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Recognitions, certifications, and professional journey that have shaped my career
            </p>
          </MobileAwareMotion>

          <MobileAwareMotion
            variants={getContainerVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport()}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
            isMobile={isMobile}
          >
            {/* Certifications & Achievements */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
              isMobile={isMobile}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <FaMedal className="text-yellow-500 mr-4 text-3xl" />
                Certifications & Achievements
              </h3>

              <MobileAwareMotion
                variants={getContainerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={getViewport()}
                className="space-y-8"
                isMobile={isMobile}
              >
                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaTrophy className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">3rd Prize- AI Autonomous Hackathon 2025</h4>
                    <p className="text-blue-600 font-medium">V R Siddartha College</p>
                    <p className="text-gray-500 text-sm">2025</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaTrophy className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">Finalist- SASTRA Daksh 2025 Hackathon</h4>
                    <p className="text-blue-600 font-medium">SASTRA University</p>
                    <p className="text-gray-500 text-sm">2025</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaGraduationCap className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">Programming in Java by NPTEL</h4>
                    <p className="text-blue-600 font-medium">Top 5% & Silver Elite</p>
                    <p className="text-gray-500 text-sm">2024</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaGraduationCap className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">Data Structures & Algorithms in Java</h4>
                    <p className="text-blue-600 font-medium">NPTEL</p>
                    <p className="text-gray-500 text-sm">2024</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaGraduationCap className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">MERN Stack Web Development</h4>
                    <p className="text-blue-600 font-medium">Apna College</p>
                    <p className="text-gray-500 text-sm">2023</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaGraduationCap className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">Pearson Mepro English, Hindi Vidwan</h4>
                    <p className="text-blue-600 font-medium">Pearson, Hindi Prachar Sabha</p>
                    <p className="text-gray-500 text-sm">2023, 2020</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="flex items-start"
                  isMobile={isMobile}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <FaChartBar className="h-6 w-6" />
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-6"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">CET Ranks</h4>
                    <p className="text-blue-600 font-medium">Andhra Pradesh- 5270, Telangana- 3359, Karnataka- 8905</p>
                    <p className="text-gray-500 text-sm">2022</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>
              </MobileAwareMotion>
            </MobileAwareMotion>

            {/* Professional Experience */}
            <MobileAwareMotion
              variants={getItemVariants()}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
              isMobile={isMobile}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <FaAward className="text-blue-500 mr-4 text-3xl" />
                Professional Experience
              </h3>

              <MobileAwareMotion
                variants={getContainerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={getViewport()}
                className="space-y-10"
                isMobile={isMobile}
              >
                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="relative border-l-2 border-blue-200 pl-8 pb-2"
                  isMobile={isMobile}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="mb-3"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">Web Lead & Full Stack Developer</h4>
                    <p className="text-blue-600 font-medium">ISTE MBU & SVEC</p>
                    <p className="text-gray-500 text-sm mb-3">2023 - Present</p>
                    <p className="text-gray-600">Led the design and development of the official club website using MERN stack. We Integrated authentication, admin panel, and dynamic event management. Collaborated with faculty to promote and organize over 25+ events and earned recognition as Web Lead.</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="relative border-l-2 border-blue-200 pl-8 pb-2"
                  isMobile={isMobile}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="mb-3"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">Web Lead & Technical Mentor</h4>
                    <p className="text-blue-600 font-medium">The Coding Club MBU</p>
                    <p className="text-gray-500 text-sm mb-3">2024 - Present</p>
                    <p className="text-gray-600">We are developing the Coding Club portal with dynamic UI/UX and event features. Mentored students in MERN stack, Java, Git and led coding events for 500+ participants. Contributed to increasing club registrations through active engagement and tech initiatives.</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="relative border-l-2 border-blue-200 pl-8 pb-2"
                  isMobile={isMobile}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500"></div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="mb-3"
                    isMobile={isMobile}
                  >
                    <h4 className="text-xl font-semibold text-gray-800">GDSC Coordinator</h4>
                    <p className="text-blue-600 font-medium">Google Developer Student Club, MBU</p>
                    <p className="text-gray-500 text-sm mb-3">2023 - 2024</p>
                    <p className="text-gray-600">Promoted Google programs like Arcade and promoted various tech workshops on cloud, web development. Encouraged students to complete Google certifications.
                    </p>
                  </MobileAwareMotion>
                </MobileAwareMotion>
              </MobileAwareMotion>
            </MobileAwareMotion>
          </MobileAwareMotion>
        </div>
      </MobileAwareSection>

      {/* Open to Work Section - simplified but attractive */}
      <MobileAwareSection
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={getViewport()}
        className="py-16 bg-gradient-to-r from-blue-50 to-white relative z-10"
        isMobile={isMobile}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MobileAwareMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={getViewport()}
            className="text-center max-w-2xl mx-auto"
            isMobile={isMobile}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full text-blue-600">
                <FaBriefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 inline-flex items-center gap-2">
                <span className="bg-green-100 h-2 w-2 rounded-full inline-block animate-pulse"></span>
                Hire Me
              </h2>
            </div>
            <p
              className="text-gray-600 text-lg mb-6"
            >
              I'm available for full-time positions, internships, and freelance projects. Let's create something amazing together!
            </p>

            {/* Resume Download Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MobileAwareMotion
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                isMobile={isMobile}
              >
                <a
                  href="./Nithyanand_V_K_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </a>
              </MobileAwareMotion>
              
              <MobileAwareMotion
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                isMobile={isMobile}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all"
                >
                  <FaEnvelope className="h-5 w-5" />
                  Contact Me
                </Link>
              </MobileAwareMotion>
            </div>
          </MobileAwareMotion>
        </div>
      </MobileAwareSection>

      {/* Coding Profiles Section with enhanced UI - removed underline */}
      <MobileAwareSection
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={getViewport()}
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative z-10"
        isMobile={isMobile}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MobileAwareMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={getViewport()}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
            isMobile={isMobile}
          >
            <div
              className="inline-flex items-center justify-center mb-4 bg-blue-100 p-4 rounded-full text-blue-600"
            >
              <FaLaptopCode size={24} />
            </div>
            <h2
              className="text-4xl font-bold mb-4 text-gray-800"
            >
              Coding Profiles
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Check out my coding journey and problem-solving skills across various platforms
            </p>
          </MobileAwareMotion>

          <MobileAwareMotion
            variants={getContainerVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport()}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            isMobile={isMobile}
          >
            {codingProfiles.map((profile, index) => (
              <MobileAwareMotion
                key={profile.name}
                variants={getItemVariants()}
                className="bg-gradient-to-br rounded-xl shadow-md p-6 bg-gradient-to-br border border-gray-200 hover:border-blue-200 transition-all duration-300"
                isMobile={isMobile}
              >
                <div className="flex items-center mb-4">
                  <div className={`${profile.iconBg} p-3 rounded-full ${profile.textColor} mr-4`}>
                    {profile.icon}
                  </div>
                  <MobileAwareMotion
                    variants={getItemVariants()}
                  >
                    <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
                    <p className="text-gray-500 text-sm">@{profile.username}</p>
                  </MobileAwareMotion>
                </div>

                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="mb-4"
                >
                  <p className={`font-semibold ${profile.textColor} mb-2`}>{profile.stats}</p>
                  <p className="text-gray-600 text-sm">{profile.description}</p>
                </MobileAwareMotion>

                <MobileAwareMotion
                  variants={getItemVariants()}
                >
                  <Link
                    to={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium inline-flex items-center text-sm hover:text-blue-700 group"
                  >
                    View Profile
                    <span
                      className="ml-1 opacity-0 group-hover:opacity-100"
                    >
                      <FaArrowRight />
                    </span>
                  </Link>
                </MobileAwareMotion>
              </MobileAwareMotion>
            ))}
          </MobileAwareMotion>
        </div>
      </MobileAwareSection>

      {/* Education Section with enhanced UI - removed underline */}
      <MobileAwareSection
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={getViewport()}
        className="py-20 bg-gradient-to-tr from-blue-50 to-white relative z-10"
        isMobile={isMobile}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MobileAwareMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={getViewport()}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
            isMobile={isMobile}
          >
            <div
              className="inline-flex items-center justify-center mb-4 bg-blue-100 p-4 rounded-full text-blue-600"
            >
              <FaGraduationCap size={24} />
            </div>
            <h2
              className="text-4xl font-bold mb-4 text-gray-800"
            >
              Education
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              My academic journey that built the foundation for my technical expertise
            </p>
          </MobileAwareMotion>

          <MobileAwareMotion
            variants={getContainerVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport()}
            className="max-w-5xl mx-auto space-y-10"
            isMobile={isMobile}
          >
            {education.map((edu, index) => (
              <MobileAwareMotion
                key={edu.degree}
                variants={getItemVariants()}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-blue-200 transition-all"
                isMobile={isMobile}
              >
                <MobileAwareMotion
                  variants={getItemVariants()}
                  className="p-6"
                  isMobile={isMobile}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <FaUniversity className="text-xl" />
                      </div>
                      <MobileAwareMotion
                        variants={getItemVariants()}
                        isMobile={isMobile}
                      >
                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                      </MobileAwareMotion>
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

                  <MobileAwareMotion
                    variants={getItemVariants()}
                    className="ml-0 md:ml-14"
                  >
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                  </MobileAwareMotion>
                </MobileAwareMotion>
              </MobileAwareMotion>
            ))}
          </MobileAwareMotion>
        </div>
      </MobileAwareSection>

      {/* Contact CTA Section */}
      <MobileAwareSection
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={getViewport()}
        className="py-20 sm:py-24 bg-blue-50 relative z-10"
        isMobile={isMobile}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <MobileAwareMotion
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewport()}
            transition={{ duration: 0.5 }}
            isMobile={isMobile}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
              Ready to Start Your Next Project?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              I'm always looking for exciting opportunities to create exceptional digital experiences. Let's discuss how we can work together.
            </p>
            <MobileAwareMotion
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              isMobile={isMobile}
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md inline-block"
              >
                Get In Touch
              </Link>
            </MobileAwareMotion>
          </MobileAwareMotion>
        </div>
      </MobileAwareSection>
    </div>
  );
};

export default Home; 