function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger'); 
  var megaMenu = document.getElementById('megaMenu'); 

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });     

  // megaMenu.addEventListener('click', function() {
  //   body.classList.remove('nav-open');
  // });


}
toggleNav();
