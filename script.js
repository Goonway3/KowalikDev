// czekamy aż DOM się załaduje
window.addEventListener('DOMContentLoaded', () => {
  // --- Typing effect ---
  const texts = [
    "Witaj na mojej stronie!",
    "Jestem początkującym programistą.",
    "Zapraszam do kontaktu."
  ];

  let el = document.getElementById("typed");
  let i = 0, j = 0, isDeleting = false;

  function type() {
    let current = texts[i];
    el.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
      j++;
      setTimeout(type, 100);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % texts.length;
      setTimeout(type, isDeleting ? 1000 : 1500);
    }
  }

  type();

  let lastScroll = 0;
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Liczymy scroll tylko względem dokumentu (bo header jest sticky w content)
    if (currentScroll <= 0) {
      header.classList.remove('hidden');
      return;
    }

    if (currentScroll > lastScroll) {
      // Scrollujesz w dół — chowamy header
      header.classList.add('hidden');
    } else {
      // Scrollujesz w górę — pokazujemy header
      header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });
});


const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('nav-links');

function toggleMenu() {
    const menu = document.getElementById('nav-links');
    menu.classList.toggle('active');
}
// const toggle2 = document.getElementById('menu-toggle');
// const navbar2 = document.getElementById('nav-links-scrolled');

// function toggleMenuScrolled() {
//     const menu = document.getElementById('nav-links-scrolled');
//     menu.classList.toggle('active');
// }