/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbarList = document.getElementById("navbar__list");
const menuLinkNumber = 4; // four sections
for(let i = 1; i <= menuLinkNumber; i++) {
    const menuLink = document.createElement("li");
    menuLink.textContent = `Section ${i}`;
    menuLink.className = "menu__link";
    menuLink.setAttribute("data-section", `section${i}`);
    navbarList.appendChild(menuLink);
}
const menuLinks = document.querySelectorAll("#navbar__list li"); // select links created above


// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll("section"); // select all sections
 window.addEventListener("scroll", ()=> {             
    let sectionId = "";                                // empty var to save the id 
    sections.forEach((section)=> {                     // for each on each section to calc the height between the top and the section height
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {  // /3 to make active before the section appear
            sectionId = section.getAttribute("id");             // save section id into sectionId the empty var

            // add active class on section
            section.parentElement.querySelectorAll(".active").forEach((sec)=>{
                sec.classList.remove("active");                 // remove from all first then 
            })
            section.classList.add("active");                    // add on the scrolling one
        }
     })

    menuLinks.forEach(link=> {                                  // same like sections but in links
        link.classList.remove("active");
        if (link.dataset.section === sectionId) {               // but with the dataset link !
            link.classList.add("active");
        }
    })

 })



// add class 'active' to menuLink when click on it
menuLinks.forEach((link)=> {                                // when click on each link to transfer the active class between them
    link.addEventListener("click", (e)=> {
        e.target.parentElement.querySelectorAll(".active").forEach((l)=> {
            l.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})



// using the logo as a button to scroll to landing page
const logo = document.getElementById("logo");
logo.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// You have the following requirements to meet.
// When clicking an item from the navigation menu, the link should scroll to the appropriate section.

// Scroll to section on link click
function scrollToSections(elements) {       // when click in any nav mmenu will scroll to his section
    elements.forEach((element)=> {          // we know his section from the dataset! "*"
        element.addEventListener("click", (e)=> {
            let section = document.getElementById(element.getAttribute("data-section"));
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    })
}
scrollToSections(menuLinks);



// scroll to top button
const upBtn = document.getElementById("up");
window.onscroll = ()=> {
    if (this.scrollY >= 1000) {
        upBtn.classList.add("active");
    } else {
        upBtn.classList.remove("active");
    }
}
upBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



// toggle menu  // to make it responsive "*"
const toggleMenu = document.getElementById("toggle-menu");
toggleMenu.addEventListener("click", ()=> {
    navbarList.classList.toggle("active");
})

