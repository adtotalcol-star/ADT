/**
 * Hero Module
 * Handles hero section animations and interactions
 */

export function initHero() {
  const hero = document.querySelector('.hero');
  const title = document.querySelector('.hero__title');
  const subtitle = document.querySelector('.hero__subtitle');
  const actions = document.querySelector('.hero__actions');
  
  if (!hero) return;

  /**
   * Animate hero elements on load
   */
  function animateHeroElements() {
    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(30px)';
      setTimeout(() => {
        title.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 200);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 300);
    }

    if (actions) {
      actions.style.opacity = '0';
      setTimeout(() => {
        actions.style.transition = 'opacity 0.6s ease 0.4s';
        actions.style.opacity = '1';
      }, 400);
    }
  }

  /**
   * Add parallax effect to hero background
   */
  function handleParallax(event) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  }

  /**
   * Handle CTA button clicks
   */
  function handleCTAClick(event) {
    const btn = event.target.closest('.btn--primary');
    if (!btn) return;

    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple-effect';
    btn.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  // Initialize
  animateHeroElements();
  
  // Event listeners
  document.addEventListener('mousemove', handleParallax);
  document.addEventListener('click', handleCTAClick);

  console.log('✅ Hero module initialized');
}
