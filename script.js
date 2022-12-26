// #####################VARIABLES##################################
// #1 selecciono clase css navbar-email
const ordersAndProfile = document.querySelector('.navbar-email');
// #4 selecciono desktop-menu
const desktopMenu = document.querySelector('.desktop-menu');
// #6 selecciono clase css menu (botón hamburguesa)
const burgerButton = document.querySelector('.menu'); // revisar
// #7 selecciono .mobile-menu
const mobileMenu = document.querySelector('.mobile-menu');

// ######################EVENTOS#################################
// #2 escucho acción del usuario desktop
ordersAndProfile.addEventListener('click', toggleOrdersAndProfile);
// #8 escucho acción del usuario mobile
burgerButton.addEventListener('click', toggleMobileMenu);


// ######################FUNCIONES#################################
// #3 Función de toggle
function toggleOrdersAndProfile() {
    // #5 ejecuto toggle
    desktopMenu.classList.toggle('inactive');
}

// #9 Toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}