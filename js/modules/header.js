/**
 * Header Module
 * Handles header behavior and interactions
 */

export function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  const scrollThreshold = 100;

  /**
   * Handle scroll events for header styling
   */
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class when past threshold
    if (currentScrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScrollY = currentScrollY;
  }

  /**
   * Handle navigation link clicks
   */
  function handleNavClick(event) {
    const link = event.target.closest('.nav__link');
    if (!link) return;

    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  header.addEventListener('click', handleNavClick);

  // Initial check
  handleScroll();

  console.log('✅ Header module initialized');
}
