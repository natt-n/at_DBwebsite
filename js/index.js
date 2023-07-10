function animateElements(selector, offset) {
    var elements = document.querySelectorAll(selector);
    
    function handleScroll() {
      var windowHeight = window.innerHeight;
      
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
    
        if (position < windowHeight - offset) {
          element.classList.add('show');
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  
  animateElements('.scroll-animation', 100);
  animateElements('.fade-in-from-right', 100);
  animateElements('.fade-in-from-left', 100);