const serviceLink = document.querySelector('.item-with-submenu');
const subServices = document.querySelector('.sub-services'); 
const dataShow = document.querySelectorAll('[data-show]'); 

// Handling navigation sub menu
const toggleServicesDisplay = (e) => {
    e.preventDefault();
    const toggleState = subServices.getAttribute('data-show');
    if(toggleState == 'false') {
        dataShow.forEach(attr => attr.setAttribute('data-show', true));
    } else {
        dataShow.forEach(attr => attr.setAttribute('data-show', false));
    }
}
serviceLink.addEventListener('click',  toggleServicesDisplay);

// Handling navigation size and opacity on scroll
const dataSmall = document.querySelectorAll('[data-small]');

document.addEventListener('scroll', (e) => handleNavigationOnScroll(e))

function handleNavigationOnScroll(e) {
    const yIsGreaterThanViewHeight = window.scrollY > window.innerHeight - 200;

    if(yIsGreaterThanViewHeight) {
        dataSmall.forEach(attr => attr.setAttribute('data-small', true))
    } else {
        dataSmall.forEach(attr => attr.setAttribute('data-small', false))
    }
}