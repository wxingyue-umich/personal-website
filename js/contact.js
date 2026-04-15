/* contact.js — Letter-drop animation for split titles */

/* ========================================
   Split title: wrap each letter in a span,
   then stagger them dropping in
======================================== */
function initSplitTitle(el, startDelay = 0) {
  if (!el) return;

  const text = el.getAttribute('aria-label') || el.textContent.trim();
  el.innerHTML = '';  // clear placeholder text

  const letters = [];

  [...text].forEach((char) => {
    const span = document.createElement('span');
    span.classList.add('letter');
    if (char === ' ') {
      span.classList.add('space');
      span.textContent = '\u00A0';  // non-breaking space
    } else {
      span.textContent = char;
    }
    el.appendChild(span);
    letters.push(span);
  });

  // Stagger each letter by 40ms
  letters.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add('visible');
    }, startDelay + i * 40);
  });
}

// h1: starts immediately
const h1 = document.querySelector('.get-in-touch .split-title');
initSplitTitle(h1, 100);

// h2: starts after h1 finishes (approx), triggered by IntersectionObserver
const h2 = document.querySelector('.other-methods .split-title');

if (h2) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initSplitTitle(h2, 0);
        observer.unobserve(h2);  // only animate once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(h2);
}

/* ========================================
   Footer year
======================================== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
