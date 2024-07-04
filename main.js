document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.icon-hamburger');
    const closeIcon = document.querySelector('.icon-close');
    const mobileNav = document.querySelector('.mobile-navigation');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});
