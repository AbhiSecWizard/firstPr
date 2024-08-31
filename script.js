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

let sidebar =document.querySelector(".sidebar");
let manubar =document.querySelector("#manubar");

manubar.addEventListener("click",()=>{
    
     if(sidebar.style.width == "0px"){
        sidebar.style.width = "350px"
        sidebar.style.transition= "0.5s ease"
     }else{
        sidebar.style.width = "0px"
     }
})