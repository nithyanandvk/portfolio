import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';

// Gallery photo data
const galleryPhotos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418231/photos%20for%20port/rza5aknjzchfkekeqsmc.jpg",
    alt: "Mentoring session 1",
    caption: "Mentored around 100 students in a 6-hour Java Workshop.",
    category: "mentoring"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418238/photos%20for%20port/wgjnbzkvphlp2dmbuabm.jpg",
    alt: "Mentoring session 2",
    caption: "Conducted a 3-hour workshop on Git & GitHub for 200+ learners.",
    category: "mentoring"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418241/photos%20for%20port/m5sgwndl8wqtq1utujqv.jpg",
    alt: "Mentored around 150 students in a 4-hour session on Frontend Development & Portfolio Building.",
    caption: "Mentored around 150 students in a 4-hour session on Frontend Development & Portfolio Building.",
    category: "mentoring"
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418236/photos%20for%20port/fm15ryzunz5hyzgqalvx.jpg",
    alt: "Mentoring session 4",
    caption: "Achieved 3rd Prize in VRSR AI Hackathon (36 hrs, 160+ teams). We : The Gandharvas",
    category: "Hackathon"
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418232/photos%20for%20port/qjjxyx1t8rmtzkjmimmn.jpg",
    alt: "Hackathon event 1",
    caption: "Runner-up in SASTRA 3-Day Hackathon - Innovating with AI for Business. We : Garuda",
    category: "Hackathon"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418232/photos%20for%20port/fifcxafjhwvbgmqp5nl0.jpg",
    alt: "Hackathon event 2",
    caption: "Competed in the VIT-AP Capture The Flag (CTF) event. We : The Gandharvas",
    category: "Hackathon"
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418231/photos%20for%20port/sbg2vbjfrit0th2tncpj.jpg",
    alt: "Hackathon event 3",
    caption: "CodeVerse HackFest 2K24 - My debut into the world of hackathons. We : Pandavas",
    category: "Hackathon"
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418234/photos%20for%20port/bjxpw5as5cqj6v26upmt.jpg",
    alt: "Hackathon event 4",
    caption: "Participated in Smart India Hackathon (SIH) and created an Alumni Portal",
    category: "Hackathon"
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745418229/photos%20for%20port/um6efzwc6pp8e25h1wlm.jpg",
    alt: "Award ceremony",
    caption: "ISTE Website Launch Event",
    category: "events"
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745420069/photos%20for%20port/irtgrnroa6ufp7dwnzou.jpg",
    alt: "Team celebration",
    caption: "Led a Chess Battle event, featuring 6 exciting rounds",
    category: "events"
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745420858/photos%20for%20port/fme2exrq8tdgj6y12iuf.png",
    alt: "Certificate 1",
    caption: "Ranked in the Top 5% of NPTEL's Java course, awarded Silver Elite certification.n",
    category: "certificates"
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745420858/photos%20for%20port/mg7bnbrfa3uk02vyhtr0.png",
    alt: "Certificate 2",
    caption: "Mastered MERN Stack Full Stack Development via Apna College certification.",
    category: "certificates"
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745420858/photos%20for%20port/so0mtjsjcnebfoano6yk.jpg",
    alt: "Certificate 3",
    caption: "Champion of Javathon at CETA event, MBU.",
    category: "certificates"
  },

  {
    id: 15,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745425527/hindi_a7y7qt.jpg",
    alt: "Certificate 2",
    caption: "Earned the Hindi Vidwan Certification for excellence in Hindi language.",
    category: "certificates"
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745425527/vrsr_txmf7n.jpg",
    alt: "Certificate 3",
    caption: "Won 3rd Prize at VRSR 36-hour AI Hackathon among 160+ teams.",
    category: "certificates"
  },

];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Add custom CSS for xs screens if needed
  useEffect(() => {
    // Add custom xs breakpoint if not already defined in Tailwind
    if (!document.getElementById('xs-breakpoint')) {
      const style = document.createElement('style');
      style.id = 'xs-breakpoint';
      style.innerHTML = `
        @media (min-width: 480px) {
          .xs\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .xs\\:gap-2 { gap: 0.5rem; }
          .xs\\:p-2 { padding: 0.5rem; }
          .xs\\:p-3 { padding: 0.75rem; }
          .xs\\:p-4 { padding: 1rem; }
          .xs\\:text-sm { font-size: 0.875rem; }
          .xs\\:text-xs { font-size: 0.75rem; }
          .xs\\:text-base { font-size: 1rem; }
          .xs\\:text-3xl { font-size: 1.875rem; }
          .xs\\:mb-2 { margin-bottom: 0.5rem; }
          .xs\\:mb-5 { margin-bottom: 1.25rem; }
          .xs\\:mb-6 { margin-bottom: 1.5rem; }
          .xs\\:py-14 { padding-top: 3.5rem; padding-bottom: 3.5rem; }
          .xs\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .xs\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
          .xs\\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .xs\\:mt-2 { margin-top: 0.5rem; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Add custom CSS for responsive grid
  useEffect(() => {
    // Add responsive grid styles
    if (!document.getElementById('responsive-grid')) {
      const style = document.createElement('style');
      style.id = 'responsive-grid';
      style.innerHTML = `
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.5rem;
        }
        
        @media (min-width: 475px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
        
        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Generate unique categories
  const categories = ['all', ...new Set(galleryPhotos.map(photo => photo.category))];

  // Filter photos based on selected category
  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(photo => photo.category === activeCategory);

  // Open photo modal
  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  // Close photo modal
  const closePhotoModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen py-12 xs:py-14 sm:py-16 md:py-20 px-3 xs:px-3 sm:px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 xs:mb-6 sm:mb-8 md:mb-12"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Photo Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm xs:text-sm sm:text-base md:text-lg px-2">
            A showcase of my mentoring activities, hackathon participations, and professional certifications
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 flex justify-center">
          <div className="md:hidden relative w-full max-w-xs">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full bg-blue-600 text-white px-3 xs:px-4 py-2 rounded-lg text-sm"
            >
              <span className="flex items-center">
                <FaFilter className="mr-2" />
                Filter
              </span>
              <span className="font-medium">{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</span>
            </button>
            
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 xs:mt-2 bg-white rounded-lg shadow-xl z-10 py-1 xs:py-2 max-h-60 overflow-y-auto"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setShowFilters(false);
                    }}
                    className={`block w-full text-left px-3 xs:px-4 py-2 xs:py-3 hover:bg-gray-100 text-sm ${
                      activeCategory === category ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
          
          <div className="hidden md:flex flex-wrap justify-center gap-1 sm:gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="gallery-grid"
        >
          <AnimatePresence>
            {filteredPhotos.length > 0 ? (
              filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer"
                  onClick={() => openPhotoModal(photo)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 flex items-end sm:opacity-0 sm:group-hover:opacity-100">
                    <div className="p-2 xs:p-2 sm:p-3 md:p-4 w-full">
                      <p className="text-white font-medium text-xs xs:text-sm sm:text-base line-clamp-2">{photo.caption}</p>
                      <span className="text-blue-200 text-xs mt-1 inline-block">
                        {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <p className="text-gray-500 text-lg">No photos found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Photo Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-5 md:p-6"
              onClick={closePhotoModal}
            >
              <button 
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white hover:text-gray-300 z-10"
                onClick={closePhotoModal}
                aria-label="Close modal"
              >
                <FaTimes size={isMobile ? 20 : 24} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full overflow-hidden rounded-lg">
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    className="w-full max-h-[65vh] object-contain mx-auto"
                  />
                </div>
                
                <div className="bg-white p-3 xs:p-3 sm:p-4 md:p-6 rounded-b-lg w-full">
                  <h3 className="text-base xs:text-base sm:text-lg md:text-xl font-semibold mb-1">{selectedPhoto.caption}</h3>
                  <p className="text-gray-600 text-xs xs:text-xs sm:text-sm md:text-base">
                    Category: {selectedPhoto.category.charAt(0).toUpperCase() + selectedPhoto.category.slice(1)}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery; 