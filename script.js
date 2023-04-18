// HEADER
// active header when window scrolled to 50px

const header = document.querySelector("[data-header]");
const navContact = document.querySelector("[data-navContact]");
const hero = document.querySelector("[data-hero]");
const toggleMenu = document.getElementById("toggleMenu");
const otherNav = document.getElementById("otherNav");

const activeHeader = function () {
    if (window.scrollY > 50) {
        header.classList.add("fixed");
        navContact.classList.add("none");
        hero.classList.remove("padd-100");

    } else {
        header.classList.remove("fixed");
        navContact.classList.remove("none");
        hero.classList.add("padd-100");
    }
}

window.addEventListener("scroll", activeHeader);
const otherNavToggle = () =>  {
    otherNav.classList.toggle("show")
}
toggleMenu.addEventListener("click", otherNavToggle)
