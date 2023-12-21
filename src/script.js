(()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})();


(()=>{
  const lenis = new Lenis({
    duration: 2.5, // increase or decrese duration value to change smoothness values on website
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
            
            
    });
    function raf(time) {
     lenis.raf(time);
     //ScrollTrigger.update(); //only apply when using scroll trigger on website
      requestAnimationFrame(raf);
    }
            
    requestAnimationFrame(raf);
})();
