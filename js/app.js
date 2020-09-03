const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', (e) => {
   navLinks.classList.toggle('show-links');
   burger.classList.toggle('toggle');
});
