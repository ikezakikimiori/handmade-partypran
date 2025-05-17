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

// gsap
gsap.from('header', {
  opacity: 0,
  delay: 0.5,
  duration: 2,
});

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

