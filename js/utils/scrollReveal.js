/**
 * Scroll Reveal Utility
 * Handles scroll-based reveal animations
 */

export function initScrollReveal(selector = '.scroll-reveal') {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const options = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-reveal--active');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(element => {
    // Add initial state if not already set
    if (!element.classList.contains('scroll-reveal--active')) {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    }
  });

  console.log(`✅ ScrollReveal initialized for ${elements.length} elements`);
  
  return {
    observe: (el) => observer.observe(el),
    unobserve: (el) => observer.unobserve(el),
    disconnect: () => observer.disconnect()
  };
}
