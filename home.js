/* eslint-disable linebreak-style */
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-desktop');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('#nav-desktop').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  nav.classList.remove('active');
}));