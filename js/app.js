/**
 * ADT - Agencia Digitalizadora Total
 * Main Application Entry Point
 */

import { initHeader } from './modules/header.js';
import { initHero } from './modules/hero.js';
import { initServices } from './modules/services.js';
import { initScrollReveal } from './utils/scrollReveal.js';
import { initAnimations } from './utils/animations.js';

/**
 * Initialize the application
 */
function initApp() {
  console.log('🚀 ADT - Agencia Digitalizadora Total initialized');
  
  // Initialize modules
  initHeader();
  initHero();
  initServices();
  
  // Initialize utilities
  initScrollReveal();
  initAnimations();
  
  // Dispatch custom event when app is ready
  document.dispatchEvent(new CustomEvent('adt:ready'));
}

/**
 * Handle DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all resources are loaded
  setTimeout(initApp, 100);
});

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    document.dispatchEvent(new CustomEvent('adt:visible'));
  }
});

// Export for potential external use
export { initApp };
