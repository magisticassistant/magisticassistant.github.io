// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const target = e.target;
  if (nav?.classList.contains('active') && 
      !nav.contains(target) && 
      !menuToggle?.contains(target)) {
    nav.classList.remove('active');
  }
});

// Smooth scroll for navigation links
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (href && href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // Close mobile menu after clicking
    nav?.classList.remove('active');
  });
}
