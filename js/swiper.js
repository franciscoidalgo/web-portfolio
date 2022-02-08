const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: false,
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: '.swiper-pagination',
    },
})

swiper.on("slideChange", () => {
    const index = swiper.activeIndex;
    const elementsToShow = document.querySelectorAll(`#reveal-slide-${index}`);
    elementsToShow.forEach(element => element.classList.add("active"));
})

