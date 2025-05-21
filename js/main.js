// modal
function toggleMenu() {
    const menu = document.getElementById('modal-menu');
    const trigger = document.querySelector('.hamburger');
    menu.classList.toggle('open');
    trigger.classList.toggle('open');
  }

// swiper
const swiper = new Swiper('.swiper', {
 
  loop: true, 
  slidesPerView: 3, 
  speed: 6000,
  // allowTouchMove:true,
  autoplay: {
    delay: 0,
  },
});

// gsap--------------------------------
// header
gsap.from('header', {
  opacity: 0,
  delay: 0.5,
  duration: 2,
});
// title-top-view
gsap.from('.main--title', {
  opacity: 0,
  delay: 0.5,
  duration: 2,
});

gsap.from('.title--area__main--viwe', {
  opacity: 0,
  delay: 0.5,
  duration: 2,
});

// concept
gsap.from('.concept-title', {
  y:100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: '.concept-title',
    start: 'top 90%',
    end: 'top 40%',
    // markers:true,
  },
});
gsap.from('.concept-title__sub', {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept-title',
    start: 'top 90%',
    end: 'top 40%',
    // markers:true,
  },
});
gsap.from('.concept--img01', {
  y:100,
  x:-50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept--img01',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.concept--img02', {
  // y:-50,
  x:100,
scale:1.2,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept--img02',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.concept--img03', {
  y:100,
  
scale:0.5,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept--img03',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.concept--img04', {
  y:100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept--img04',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.concept--img05', {
  y:100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept--img05',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.concept__text--02', {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept__text--02',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.concept__text--03', {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.concept__text--03',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

// menu
gsap.from('.menu-title', {
   y:100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.menu-title',
    start: 'top 90%',
    end: 'top 40%',
    // markers:true,
  },
});

;gsap.from('.dinner--img', {
  y:100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.dinner--img',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.drink--img', {
  y:100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.drink--img',
    start: 'top 100%',
    end: 'top 40%',
    // markers:true,
  },
});

// information
gsap.from('.information-title', {
   y:100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.information-title',
    start: 'top 90%',
    end: 'top 40%',
    // markers:true,
  },
});

// access
gsap.from('.access-title', {
   y:100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.access-title',
    start: 'top 90%',
    end: 'top 40%',
    // markers:true,
  },
});

gsap.from('.access-media', {
  scale:1.2,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.access-media',
    start: 'top 70%',
    end: 'top 40%',
    // markers:true,
  },
});

// footer