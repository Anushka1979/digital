var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




var tl = gsap.timeline;

tl
.from("#img1",{
    delay:0.4,
    y:60,
    opacity:0,
    duration:1,
})
.from("#img2",{
    delay:0.4,
    x:60,
    opacity:0,
    duration:1,
})
.from("#img3",{
    delay:0.4,
    y:-60,
    opacity:0,
    duration:1,
})
.from("#page1 h1",{
    delay:0.5,
    y:60,
    opacity:0,
})