const serviceLink = document.querySelector('.item-with-submenu');
const subServices = document.querySelector('.sub-services'); 

const toggleServicesDisplay = (e) => {
    e.preventDefault();
    const toggleState = subServices.getAttribute('data-show');
    if(toggleState == 'false') {
        subServices.setAttribute('data-show', true)
    } else {
        subServices.setAttribute('data-show', false)
    }
}
serviceLink.addEventListener('click',  toggleServicesDisplay);
