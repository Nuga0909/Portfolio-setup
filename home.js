/* eslint-disable linebreak-style */
window.onload=function() {
  const hamburger = document.querySelector('#nav-mobile');
  const nav = document.querySelector('.nav-lists');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav-list').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }));
};