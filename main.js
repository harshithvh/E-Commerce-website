// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll =  function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
}
// The classList property is read-only, but you can use add() and remove() methods to add or remove CSS classes.
// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})





