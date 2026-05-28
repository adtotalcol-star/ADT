/**
 * Services Module
 * Handles service cards interactions, modal details and animations.
 */

const WHATSAPP_NUMBER = '573213303645';

const SERVICES = {
  web: {
    eyebrow: 'Sitios web corporativos y landing pages',
    title: 'Diseno Web Profesional',
    summary: 'Creamos sitios web rapidos, claros y orientados a conversion para que tu negocio tenga presencia digital solida desde el primer dia.',
    includes: [
      'Diseno responsive para celular, tablet y escritorio',
      'Estructura de secciones enfocada en captar clientes',
      'Optimizacion basica SEO y velocidad de carga',
      'Formulario, botones de contacto y enlaces a WhatsApp',
      'Configuracion inicial de dominio, hosting o publicacion'
    ],
    ideal: [
      'Negocios que necesitan una web profesional',
      'Empresas que quieren renovar una pagina antigua',
      'Emprendimientos que buscan generar confianza y consultas'
    ],
    details: 'Tambien podemos incluir integraciones con mapas, catalogos, analitica, pixeles de publicidad y secciones administrables segun el alcance del proyecto.'
  },
  ecommerce: {
    eyebrow: 'Ventas digitales y catalogos online',
    title: 'Tiendas Online',
    summary: 'Desarrollamos tiendas digitales listas para vender, con una experiencia de compra simple y herramientas para administrar productos y pedidos.',
    includes: [
      'Catalogo de productos organizado por categorias',
      'Carrito de compras y flujo de pago',
      'Integracion con medios de pago y WhatsApp',
      'Gestion basica de inventario, pedidos y clientes',
      'Diseno optimizado para compradores desde celular'
    ],
    ideal: [
      'Marcas que quieren vender sin depender solo de redes',
      'Tiendas fisicas que quieren abrir canal digital',
      'Negocios con catalogo que reciben pedidos por mensaje'
    ],
    details: 'Podemos adaptar la tienda a modelos con pagos en linea, pedidos por WhatsApp, productos variables, entregas locales o ventas nacionales.'
  },
  social: {
    eyebrow: 'Contenido, estrategia y presencia de marca',
    title: 'Redes Sociales',
    summary: 'Planificamos y gestionamos contenido para que tu marca comunique mejor, mantenga constancia y convierta seguidores en oportunidades reales.',
    includes: [
      'Diagnostico de perfiles actuales',
      'Calendario de contenido mensual',
      'Disenos para publicaciones, historias o reels',
      'Textos, llamados a la accion y lineamientos de marca',
      'Reporte de resultados y recomendaciones'
    ],
    ideal: [
      'Negocios que publican sin una estrategia clara',
      'Marcas que quieren verse mas profesionales',
      'Empresas que necesitan constancia y mejor comunicacion'
    ],
    details: 'El servicio puede enfocarse en Instagram, Facebook, TikTok, LinkedIn o la red que mas sentido tenga para tu cliente ideal.'
  },
  seo: {
    eyebrow: 'Visibilidad organica en buscadores',
    title: 'Posicionamiento SEO',
    summary: 'Mejoramos la estructura, contenido y rendimiento de tu sitio para que Google entienda mejor tu negocio y atraigas busquedas relevantes.',
    includes: [
      'Auditoria tecnica y de contenido',
      'Investigacion de palabras clave',
      'Optimizacion de titulos, textos y meta descripciones',
      'Mejoras de velocidad, estructura interna y rastreo',
      'Plan de contenidos para crecer el trafico organico'
    ],
    ideal: [
      'Empresas que quieren recibir clientes desde Google',
      'Sitios web publicados que no generan visitas suficientes',
      'Negocios locales que necesitan aparecer en su ciudad'
    ],
    details: 'Tambien podemos trabajar SEO local, Google Business Profile, blogs, paginas de servicio y seguimiento de posiciones segun el objetivo comercial.'
  }
};

function buildWhatsappUrl(serviceTitle) {
  const message = `Hola ADT, quiero informacion sobre el servicio de ${serviceTitle}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderList(listElement, items) {
  listElement.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

export function initServices() {
  const serviceCards = document.querySelectorAll('.service-card');
  const modal = document.getElementById('serviceModal');
  if (!serviceCards.length || !modal) return;

  const modalPanel = modal.querySelector('.service-modal__panel');
  const modalEyebrow = document.getElementById('serviceModalEyebrow');
  const modalTitle = document.getElementById('serviceModalTitle');
  const modalSummary = document.getElementById('serviceModalSummary');
  const modalIncludes = document.getElementById('serviceModalIncludes');
  const modalIdeal = document.getElementById('serviceModalIdeal');
  const modalDetails = document.getElementById('serviceModalDetails');
  const modalWhatsapp = document.getElementById('serviceModalWhatsapp');
  let lastFocusedCard = null;

  function initCardEffects() {
    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 300 + (index * 100));

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 28;
        const rotateY = (centerX - x) / 28;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  function openServiceModal(serviceKey, card) {
    const service = SERVICES[serviceKey];
    if (!service) return;

    lastFocusedCard = card;
    serviceCards.forEach(item => item.classList.remove('card--active'));
    card.classList.add('card--active');

    modalEyebrow.textContent = service.eyebrow;
    modalTitle.textContent = service.title;
    modalSummary.textContent = service.summary;
    renderList(modalIncludes, service.includes);
    renderList(modalIdeal, service.ideal);
    modalDetails.textContent = service.details;
    modalWhatsapp.href = buildWhatsappUrl(service.title);

    modal.classList.add('service-modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalPanel.focus();
  }

  function closeServiceModal() {
    modal.classList.remove('service-modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    lastFocusedCard?.focus();
  }

  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal--active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    serviceCards.forEach(card => {
      card.classList.add('scroll-reveal');
      observer.observe(card);
    });
  }

  serviceCards.forEach(card => {
    card.addEventListener('click', () => openServiceModal(card.dataset.service, card));
  });

  modal.querySelectorAll('[data-modal-close]').forEach(closeControl => {
    closeControl.addEventListener('click', closeServiceModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('service-modal--open')) {
      closeServiceModal();
    }
  });

  initCardEffects();
  initScrollAnimations();

  console.log('Services module initialized');
}
