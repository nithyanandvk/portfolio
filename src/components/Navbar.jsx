import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-gray-800 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" onClick={closeMenu}>
          Nithyanand V K
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "text-primary-600 font-medium border-b-2 border-primary-500" : "text-gray-800 hover:text-primary-600 transition-colors"
          }>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            isActive ? "text-primary-600 font-medium border-b-2 border-primary-500" : "text-gray-800 hover:text-primary-600 transition-colors"
          }>
            Projects
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => 
            isActive ? "text-primary-600 font-medium border-b-2 border-primary-500" : "text-gray-800 hover:text-primary-600 transition-colors"
          }>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? "text-primary-600 font-medium border-b-2 border-primary-500" : "text-gray-800 hover:text-primary-600 transition-colors"
          }>
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-50 p-4 absolute w-full`}>
        <div className="flex flex-col space-y-4">
          <NavLink to="/" 
            className={({ isActive }) => 
              isActive ? "text-primary-600 font-medium bg-gray-100 py-2 px-3 rounded" : "text-gray-800 hover:text-primary-600 transition-colors py-2 px-3"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink to="/projects" 
            className={({ isActive }) => 
              isActive ? "text-primary-600 font-medium bg-gray-100 py-2 px-3 rounded" : "text-gray-800 hover:text-primary-600 transition-colors py-2 px-3"
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink to="/gallery" 
            className={({ isActive }) => 
              isActive ? "text-primary-600 font-medium bg-gray-100 py-2 px-3 rounded" : "text-gray-800 hover:text-primary-600 transition-colors py-2 px-3"
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-primary-600 font-medium bg-gray-100 py-2 px-3 rounded" : "text-gray-800 hover:text-primary-600 transition-colors py-2 px-3"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 