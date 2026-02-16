// main.js - Minimal vanilla JS for school marketing site (< 200 LOC)

// Mobile menu toggle with ARIA and focus trap
(function initMobileMenu() {
  const toggleBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  
  if (!toggleBtn || !mobileMenu) return;
  
  toggleBtn.addEventListener('click', function() {
    const expanded = mobileMenu.getAttribute('aria-expanded') === 'true';
    const newState = !expanded;
    
    mobileMenu.setAttribute('aria-expanded', String(newState));
    toggleBtn.setAttribute('aria-expanded', String(newState));
    
    if (overlay) {
      overlay.classList.toggle('active', newState);
    }
    
    // Focus trap - basic implementation
    if (newState) {
      const firstFocusable = mobileMenu.querySelector('a, button');
      if (firstFocusable) firstFocusable.focus();
    } else {
      toggleBtn.focus();
    }
  });
  
  // Close menu on overlay click
  if (overlay) {
    overlay.addEventListener('click', function() {
      mobileMenu.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('active');
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.getAttribute('aria-expanded') === 'true') {
      mobileMenu.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (overlay) overlay.classList.remove('active');
      toggleBtn.focus();
    }
  });
})();

// IntersectionObserver for reveal animations
(function initRevealAnimations() {
  const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal').forEach(function(el) {
    io.observe(el);
  });
})();

// Accessible carousel with keyboard controls
(function initCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  
  const track = carousel.querySelector('[data-carousel-track]');
  const slides = Array.from(track.querySelectorAll('[data-carousel-slide]'));
  const prevBtn = carousel.querySelector('[data-carousel-prev]');
  const nextBtn = carousel.querySelector('[data-carousel-next]');
  const dotsContainer = carousel.querySelector('[data-carousel-dots]');
  
  let currentIndex = 0;
  let autoplayInterval = null;
  let isPaused = false;
  
  // Create dots
  slides.forEach(function(_, index) {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
    dot.className = 'w-3 h-3 rounded-full transition-all ' + 
                    (index === 0 ? 'bg-primary-600' : 'bg-gray-300');
    dot.addEventListener('click', function() { goToSlide(index); });
    if (dotsContainer) dotsContainer.appendChild(dot);
  });
  
  const dots = dotsContainer ? Array.from(dotsContainer.children) : [];
  
  function updateSlides() {
    slides.forEach(function(slide, index) {
      slide.classList.toggle('hidden', index !== currentIndex);
      slide.setAttribute('aria-hidden', index !== currentIndex ? 'true' : 'false');
    });
    
    dots.forEach(function(dot, index) {
      dot.className = 'w-3 h-3 rounded-full transition-all ' + 
                      (index === currentIndex ? 'bg-primary-600' : 'bg-gray-300');
    });
  }
  
  function goToSlide(index) {
    currentIndex = index;
    updateSlides();
    resetAutoplay();
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  }
  
  function startAutoplay() {
    if (isPaused) return;
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }
  
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }
  
  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', function() { prevSlide(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { nextSlide(); resetAutoplay(); });
  
  // Pause on hover or focus
  carousel.addEventListener('mouseenter', function() { isPaused = true; stopAutoplay(); });
  carousel.addEventListener('mouseleave', function() { isPaused = false; startAutoplay(); });
  carousel.addEventListener('focusin', function() { isPaused = true; stopAutoplay(); });
  carousel.addEventListener('focusout', function() { isPaused = false; startAutoplay(); });
  
  // Keyboard controls
  carousel.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });
  
  // Initialize
  updateSlides();
  startAutoplay();
})();

// Lazy loading for images
(function initLazyLoad() {
  const imgObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  document.querySelectorAll('img[data-src]').forEach(function(img) {
    imgObserver.observe(img);
  });
})();

// Active navigation highlighting
(function initActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a[href]');
  
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('font-bold', 'text-primary-700');
    }
  });
})();
