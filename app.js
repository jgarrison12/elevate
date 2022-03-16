const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const modalClose = document.getElementById('modal-close');
const goals = document.getElementById('goals');
const dropdown= document.getElementById('dropdown')

// goals menu
goals.addEventListener('click', () => {
  dropdown.classList.toggle('show');
})

// window.addEventListener('click', () => {
//   dropdown.classList.remove = 'show'
// })

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


// modal show only once
$(document).ready(function(){
  //loads when document is ready
  
  if (document.cookie.indexOf('.modal-bg') >= 0) {
   //do nothing if modal_shown cookie is present
  } else {
    $('.modal').modal('show');  //show modal pop up
    document.cookie = 'modal_shown=seen'; //set cookie modal_shown
    //cookie will expire when browser is closed
  }
  
  })