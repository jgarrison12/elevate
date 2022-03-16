const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const modalClose = document.getElementById('modal-close');
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

// email modal
function modalOpen5() {
  document.querySelector(".modal-bg").style.display = 'block'
};

setTimeout("modalOpen5()", 7000);

// email modal close
modalClose.addEventListener('click', () => {
  document.querySelector(".modal-bg").style.display = 'none'
});