/* ===========================================================
   CAMBALACHE TECHNOLOGIES — Global JS
   =========================================================== */

// 1. Navbar scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}, { passive: true });

// 2. Mobile toggle
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// 3. Reveal on scroll (IntersectionObserver)
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .15, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// 4. Active link based on URL
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});

// 5. Tab switcher (Soluciones page)
document.querySelectorAll('[data-tabs]').forEach(group => {
  const tabs = group.querySelectorAll('[data-tab]');
  const panels = group.querySelectorAll('[data-panel]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
    });
  });
});

// 6. Contact form (basic UX feedback — no real backend)
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '✓ Mensaje enviado';
      btn.style.background = '#10B981';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 2800);
    }, 900);
  });
}

// 7. Year in footer
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});






