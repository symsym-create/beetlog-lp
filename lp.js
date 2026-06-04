/* lp.js — scroll reveal + nav active link */

// IntersectionObserver-based reveal
const revealTargets = [
  '.section-head', '.why-card', '.feat', '.step', '.price', '.launch-banner',
  '.coming-copy', '.badges', '.faq-list', '.hero-copy', '.hero-stage',
];
const els = revealTargets.flatMap(sel => Array.from(document.querySelectorAll(sel)));
els.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

els.forEach(el => io.observe(el));

// Smooth subtle parallax on hero floating cards
const stage = document.querySelector('.hero-stage');
const sale = document.querySelector('.hero-card--sale');
const temp = document.querySelector('.hero-card--temp');
if (stage && sale && temp) {
  stage.addEventListener('mousemove', (e) => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    sale.style.transform = `rotate(5deg) translate(${x * -8}px, ${y * -8}px)`;
    temp.style.transform = `rotate(-6deg) translate(${x * 8}px, ${y * 8}px)`;
  });
  stage.addEventListener('mouseleave', () => {
    sale.style.transform = '';
    temp.style.transform = '';
  });
}
