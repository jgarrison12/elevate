const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const goals = document.getElementById('goals');
const dropdown= document.getElementById('dropdown')

// goals menu
goals.addEventListener('click', () => {
  dropdown.classList.toggle('show');
})

// hamburger menu

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
})