console.log('Welcome to the Intersection Observation Presentation!')

window.addEventListener("load", (event) => {
    // let image = document.querySelector("img")
    // console.log('allImages on load: ', image)
    let allImages = document.querySelectorAll('img')
    allImages.forEach(image => {
       createObserver(image);
    })
    
  }, false);
  
  function createObserver(image) {
    let observer;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    observer = new IntersectionObserver(handleIntersect, options) 
    
    observer.observe(image)
  }
  
  function handleIntersect(entries, observer) {
    
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('slideLeft')
      }
    })
  }