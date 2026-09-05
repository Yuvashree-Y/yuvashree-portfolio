// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const menuIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");


    if (navLinks.classList.contains("show")) {

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    }

});



// ========================================
// CLOSE MOBILE MENU
// ========================================

const navItems = document.querySelectorAll(".nav-link");


navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    });

});



// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");


        if (
            item.getAttribute("href") ===
            `#${currentSection}`
        ) {

            item.classList.add("active");

        }

    });

});



// ========================================
// SCROLL TO TOP
// ========================================

const scrollTop = document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(

    ".section-heading, " +
    ".about-text, " +
    ".about-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".contact-card"

);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});