// Shared project data for the portfolio
export const PROJECTS = [
  {
    _id: '1',
    title: 'ISTE MBU & SVEC Club Website',
    summary: "We proudly developed the official website for ISTE MBU & SVEC – a vibrant digital space to showcase our club's events, teams, and achievements.",
    description: 'We successfully developed and launched the official website of the ISTE MBU & SVEC Club – a proud milestone of 2024! This dynamic full-stack platform was built to make our club more visible and accessible online. It features a fully responsive design, an engaging events page with registrations and YouTube integrations, a detailed team showcase, a gallery of club memories, and a secure admin portal for content updates. With robust authentication, form handling, and cloud deployment, the website empowers our team to keep the platform fresh and active. Grateful to our faculty head, amazing teammates, seniors, and ISTE family for their constant support. Recognized as Web Lead for leading this meaningful initiative!',
    image: 'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745337700/aylqwzibkvonxckwh6ho.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yourusername/iste-club-website',
    liveDemo: 'https://istembu.in/',
    featured: true,
    category: 'web'
  },
  {
    _id: '2',
    title: 'The Coding Club MBU Portal',
    summary: 'An all-in-one interactive platform crafted to empower thousands of students through tech events, learning resources, and collaborative teams.',
    description: 'We are proudly developing the official portal for the Coding Club MBU — a full-stack platform designed to elevate club engagement and streamline event and resource management. The site features a modern sidebar layout with sections for Core Members, Sub Teams, Upcoming & Past Events, YouTube Playlists, Learning Platforms, and a vibrant Gallery. The dynamic admin dashboard enables content updates and user management. Built using the full stack technologies, this portal not only promotes participation but also provides real-time access to opportunities for students. As a mentoring initiative, the project also uplifts students in learning technical skills.',
    image: 'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745338307/raxiock9xtxx0jiuglnl.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yourusername/coding-club-portal',
    liveDemo: '/projects',
    featured: true,
    category: 'web'
  },

  {
    _id: '3',
    title: 'AI Business Insights Hub',
    summary: 'AI-driven platform for real-time financial insights, market trends, and business intelligence.',
    description: 'Developed as part of the SASTRA University AI Hackathon initiative, this platform leverages advanced AI tools provided through institutional access. The hub features intelligent dashboards, predictive analytics, and interactive data visualization to assist in strategic business decision-making. Built using a modern tech stack including React, Next.js, and Tailwind CSS for the frontend, and Python-powered ML models for backend analysis. The system dynamically processes financial data and presents insights through a user-friendly interface designed for managers and analysts.',
    image: 'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745338453/xdgnbp5cbh5tvodrtckw.png',
    technologies: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'MongoDB', 'Python (ML)'],
    github: 'https://github.com/yourusername/ai-business-insights',
    liveDemo: 'https://garuda-sastra.netlify.app/',
    featured: false,
    category: 'ai'
  },

  {
    _id: '4',
    title: 'Explore and Stay',
    summary: 'A full-stack Airbnb-inspired platform for discovering villas, rooms, and unique stays at tourist and adventure destinations.',
    description: 'Explore and Stay is a travel accommodation discovery platform developed and deployed with the support of my mother. Inspired by Airbnb, it enables users to browse and book listings like villas, pools, camping sites, and more. The application is fully responsive and built using the MVC architecture, featuring secure login with Passport.js (salting and hashing), session-based performance optimization, and advanced user authorization. Users can search listings by category, view detailed property pages with reviews and maps, and authenticated users can manage listings and reviews. Map integration is done via Mappls APIs for geocoding and real-time location display. Cloudinary is used for image hosting, and the app is deployed using Render. Special thanks to Shradha Khapra for MERN stack mentorship that guided this real-world solution.',
    image: 'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745338879/wzalbtftvpwwxn8ow5pe.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Mappls API', 'EJS', 'Cloudinary', 'Render'],
    github: 'https://github.com/yourusername/explore-and-stay',
    liveDemo: 'https://explore-and-stay.onrender.com/listings/',
    featured: true,
    category: 'web'
  }
  ,
  {
    _id: '5',
    title: 'Personal Portfolio',
    summary: 'Responsive and animated portfolio site showcasing resume, projects, and contact information.',
    description: 'A responsive personal portfolio website developed using React, Vite, and Tailwind CSS with smooth animations powered by Framer Motion. Built with the help of Cursor, the AI-powered IDE, the site features detailed sections for project showcases, skills, certifications. The goal of this portfolio is to present my professional journey, technical skills, and achievements in an interactive and engaging format.',
    image: 'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1745339537/jatm56g75wsczd2rkzpv.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Cursor AI'],
    github: 'https://github.com/nithyanandvk/modern-portfolio',
    liveDemo: 'https://nithyanandvk.netlify.app/',
    featured: false,
    category: 'Frontend'
  }
  
];

// Helper function to get a project by ID
export const getProjectById = (id) => {
  return PROJECTS.find(project => project._id === id);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return PROJECTS;
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return PROJECTS.filter(project => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return PROJECTS.filter(project =>
    project.category.toLowerCase() === category.toLowerCase()
  );
}; 