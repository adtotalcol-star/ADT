/**
 * Animations Utility
 * Helper functions for animations and effects
 */

/**
 * Animate an element with CSS transitions
 * @param {HTMLElement} element - The element to animate
 * @param {Object} properties - CSS properties to animate
 * @param {number} duration - Animation duration in ms
 * @param {string} easing - CSS easing function
 */
export function animate(element, properties, duration = 300, easing = 'ease') {
  if (!element) return;
  
  element.style.transition = `all ${duration}ms ${easing}`;
  Object.assign(element.style, properties);
  
  return new Promise(resolve => {
    const handler = () => {
      element.removeEventListener('transitionend', handler);
      resolve();
    };
    element.addEventListener('transitionend', handler);
  });
}

/**
 * Fade in an element
 * @param {HTMLElement} element - The element to fade in
 * @param {number} duration - Duration in ms
 */
export function fadeIn(element, duration = 300) {
  if (!element) return Promise.resolve();
  
  element.style.opacity = '0';
  element.style.display = element.style.display === 'none' ? '' : element.style.display;
  
  return animate(element, { opacity: '1' }, duration);
}

/**
 * Fade out an element
 * @param {HTMLElement} element - The element to fade out
 * @param {number} duration - Duration in ms
 */
export function fadeOut(element, duration = 300) {
  if (!element) return Promise.resolve();
  
  return animate(element, { opacity: '0' }, duration).then(() => {
    element.style.display = 'none';
  });
}

/**
 * Initialize global animations
 */
export function initAnimations() {
  // Add animation classes to elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  animatedElements.forEach(element => {
    const animation = element.getAttribute('data-animate');
    const delay = element.getAttribute('data-delay') || '0';
    
    element.classList.add('animate', `animate--${animation}`);
    if (delay !== '0') {
      element.classList.add(`animate--delay-${delay}`);
    }
  });

  console.log(`✅ Animations initialized for ${animatedElements.length} elements`);
}

/**
 * Create a ripple effect on click
 * @param {HTMLElement} element - The element to add ripple to
 * @param {Event} event - The click event
 */
export function createRipple(element, event) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.className = 'ripple';
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;
  
  element.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 */
export function debounce(func, wait = 250) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in ms
 */
export function throttle(func, limit = 250) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
