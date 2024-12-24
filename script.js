const images = ["images/carousel/1st.jpeg", "images/carousel/irons-boys.jpeg", "images/carousel/jonah-turkstra.jpeg", "images/carousel/jonah-zane-ben.jpeg", "images/carousel/jonah-parents.jpeg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
    startCarousel();
}, 4000); /* How often the carousel changes images */
var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index > images.length - 1) index = 0;
}