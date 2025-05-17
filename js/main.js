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
  allowTouchMove: false,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
  },
});

// footer