const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = mobileMenu.querySelectorAll('a');

function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  menuOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  menuOverlay.classList.add('hidden');
  document.body.style.overflow = '';
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// Cerrar menú al hacer clic en un link
menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'Escape' &&
    !mobileMenu.classList.contains('translate-x-full')
  ) {
    closeMenu();
  }
}); // NO HAY JAVASCRIPT
