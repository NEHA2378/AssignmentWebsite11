/* ============================================================
   script.js — Compliance Landing Page
   ============================================================ */

/* ── Mobile Drawer ─────────────────────────────────────────── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
  navDrawer.classList.remove('translate-x-full');
  navDrawer.classList.add('translate-x-0');
  navOverlay.classList.remove('opacity-0', 'pointer-events-none');
  navOverlay.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  navDrawer.classList.add('translate-x-full');
  navDrawer.classList.remove('translate-x-0');
  navOverlay.classList.add('opacity-0', 'pointer-events-none');
  navOverlay.classList.remove('opacity-100');
  document.body.style.overflow = '';
}

hamburgerBtn?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
navOverlay?.addEventListener('click', closeDrawer);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});

/* ── Navbar shadow on scroll ───────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('shadow-md');
  }
});

/* ── Scroll fade-in ────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-8');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
  el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
  observer.observe(el);
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {

    navLinks.forEach(item => {
      item.classList.remove('active');
    });

    this.classList.add('active');
  });
});