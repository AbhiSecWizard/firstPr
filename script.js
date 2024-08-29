var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 1200,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Auto-play won't be disabled after user interactions
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
