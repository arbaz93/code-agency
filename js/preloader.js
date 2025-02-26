document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.querySelector('.preloader');

    document.fonts.ready.then(() => {
        preloader.setAttribute('data-animation', 'true');
    });
})

window.onload = () => {
    const preloader = document.querySelector('.preloader');
    preloader.setAttribute('data-visible', false);

}