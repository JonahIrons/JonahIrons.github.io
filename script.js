/* CARAOUSEL */
const images = ["images/carousel/jonah-turkstra.jpeg", "images/carousel/irons-boys.jpeg", "images/carousel/jonah-zane-ben.jpeg", "images/carousel/jonah-parents.jpeg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
    startCarousel();
}, 6000); /* How often the carousel changes images */
var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index > images.length - 1) index = 0;
}



/* ABOUT SECTION TAB FUNCTIONALITY */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



/* Side menu animations (open and close) */
var sideMenu = document.getElementById("sidemenu");


function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}