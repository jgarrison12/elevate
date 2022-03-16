const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');


// hamburger menu
hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
})

