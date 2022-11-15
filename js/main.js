/*Toggle first accordion item to be displayed on load*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("is-open");
        
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        
        if (accordionItemHeader.classList.contains("is-open")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = "0px";
        }
    });
});

window.onload = function(){
    document.getElementById("on-start-active-portfolio").click();
};

/*Responsive navbar*/
function onMenuClick() {
    var responsive_class_name = "responsive";
    
    var navUls = document.getElementsByClassName("nav-ul");
    for(var i = 0; i < navUls.length; i++) {
        navUls[i].classList.toggle(responsive_class_name);
    }

    var navbarElementsToHide = document.getElementsByClassName("nav-hide");
    for(var i = 0; i < navbarElementsToHide.length; i++) {
        navbarElementsToHide[i].classList.toggle(responsive_class_name);
    }
    
    var navbar = document.getElementsByClassName("nav-container");
    navbar[0].classList.toggle(responsive_class_name);
    
    var homeLink = document.getElementById("home-link");
    homeLink.classList.toggle(responsive_class_name);

    var menuBtn = document.getElementById("menu-btn");
    menuBtn.classList.toggle(responsive_class_name);
}