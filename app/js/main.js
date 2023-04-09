const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
});