// Scroll utility functions to improve mobile performance

let lastScrollTop = 0;
let scrollTimeout;
let isScrolling = false;

// Detect scroll direction (up or down)
export const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const body = document.body;
  
  // Add scrolling class during scroll
  if (!isScrolling) {
    isScrolling = true;
    body.classList.add('scrolling');
  }
  
  // Clear the timeout if it's set
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  
  // Set direction classes
  if (scrollTop > lastScrollTop) {
    body.classList.remove('scrolling-up');
    body.classList.add('scrolling-down');
  } else {
    body.classList.remove('scrolling-down');
    body.classList.add('scrolling-up');
  }
  
  // Add class to disable hover effects during scroll
  body.classList.add('disable-hover-on-scroll');
  
  lastScrollTop = scrollTop;
  
  // Set a timeout to remove the class after scrolling stops
  scrollTimeout = setTimeout(() => {
    body.classList.remove('scrolling');
    body.classList.remove('disable-hover-on-scroll');
    isScrolling = false;
  }, 100);
};

// Mark elements as animated once their animation completes
export const markAnimatedElements = () => {
  const animatedElements = document.querySelectorAll('.motion-div, .motion-section, [class*="motion-"]');
  
  animatedElements.forEach(element => {
    element.addEventListener('animationend', () => {
      element.classList.add('animated');
      element.setAttribute('data-animated', 'true');
    });
  });
};

// Initialize scroll helpers
export const initScrollHelpers = () => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  markAnimatedElements();
}; 