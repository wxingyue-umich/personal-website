/* work.js — Banner animation + Filter logic */

/* ========================================
   Banner: sequential intro animation
   Sequence:
     t=100ms  word-1 drops in
     t=600ms  line-right extends
     t=1200ms line-left extends
     t=1700ms word-2 drops in
======================================== */
(function () {
  const word1     = document.querySelector('.word-1');
  const word2     = document.querySelector('.word-2');
  const lineRight = document.querySelector('.line-right');
  const lineLeft  = document.querySelector('.line-left');

  if (!word1) return;

  setTimeout(() => word1.classList.add('visible'),     100);
  setTimeout(() => lineRight.classList.add('visible'), 600);
  setTimeout(() => lineLeft.classList.add('visible'),  1200);
  setTimeout(() => word2.classList.add('visible'),     1700);
})();


/* ========================================
   Filter: show / hide cards
======================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards  = document.querySelectorAll('.work-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selected = btn.dataset.filter;

    workCards.forEach(card => {
      if (selected === 'all') {
        card.classList.remove('hidden');
        return;
      }
      const tags = card.dataset.tags ? card.dataset.tags.split(' ') : [];
      if (tags.includes(selected)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


/* ========================================
   Footer year
======================================== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
