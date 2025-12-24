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
});

// Cuenta regresiva para Navidad / Fin de año
const countdownDate = new Date('Dec 31, 2025 23:59:59').getTime();
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    countdownElement.innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  }
  if (distance < 0) {
    clearInterval(timer);
    const bar = document.getElementById('christmas-bar');
    if (bar) bar.style.display = 'none';
  }
}, 1000);
