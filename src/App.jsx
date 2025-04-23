import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Animation Variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Animated Page Wrapper Component
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Function to handle preloading images for better UX
  useEffect(() => {
    const preloadImages = () => {
      // Add any important images that should be preloaded here
      const imagesToPreload = [
        // Add image paths here
      ];
      
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-16 page-background">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/projects" 
              element={
                <AnimatedPage>
                  <Projects />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/projects/:id" 
              element={
                <AnimatedPage>
                  <ProjectDetails />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/gallery" 
              element={
                <AnimatedPage>
                  <Gallery />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              } 
            />
            <Route 
              path="*" 
              element={
                <AnimatedPage>
                  <NotFound />
                </AnimatedPage>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      </div>
  );
};

export default App;
