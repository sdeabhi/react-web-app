document.addEventListener("DOMContentLoaded", function(){
    var a =  document.getElementById('navId');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          a.classList.add('fixed-top');
        }
        else  {
          a.classList.remove('fixed-top');
          document.body.style.paddingTop = '10px';
        } 
    });
  }); 


