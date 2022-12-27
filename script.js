// #####################VARIABLES##################################
// #1 selecciono clase css navbar-email
const ordersAndProfile = document.querySelector('.navbar-email');
// #4 selecciono desktop-menu
const desktopMenu = document.querySelector('.desktop-menu');
// #6 selecciono clase css menu (botón hamburguesa)
const burgerButton = document.querySelector('.menu'); // revisar
// #7 selecciono .mobile-menu
const mobileMenu = document.querySelector('.mobile-menu');
// #10 selecciono .navbar-shopping-cart
const shoppingCart = document.querySelector('.navbar-shopping-cart');
// #11 selecciono aside
const aside = document.querySelector('.product-detail');

// ######################EVENTOS#################################
// #2 escucho acción del usuario desktop
ordersAndProfile.addEventListener('click', toggleOrdersAndProfile);
// #8 escucho acción del usuario mobile
burgerButton.addEventListener('click', toggleMobileMenu);
// #12 escucho acción carrito
shoppingCart.addEventListener('click', toggleShoppingCart);


// ######################FUNCIONES#################################
// #3 Función de toggle desktop
function toggleOrdersAndProfile() {
    // #5 ejecuto toggle
    desktopMenu.classList.toggle('inactive');
}

// #9 Toggle mobile
function toggleMobileMenu() {

    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');    
    }


    mobileMenu.classList.toggle('inactive');
}

// #13 Función toggle carrito
function toggleShoppingCart() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');    
        }

        aside.classList.toggle('inactive');
    }