// #######################################################
// #1 selecciono navbar-email
const ordersAndProfile = document.querySelector('.navbar-email');
// #4 selecciono desktop-menu
const desktopMenu = document.querySelector('.desktop-menu');

// #######################################################
// #2 escucho acción del usuario
ordersAndProfile.addEventListener('click', toggleOrdersAndProfile);

// #3 Función de toggle
function toggleOrdersAndProfile() {
    // #5 ejecuto toggle active
    desktopMenu.classList.toggle('inactive');
}

console.log('hola');