(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }

    const nav = document.querySelector(".header__nav");

    const burger = document.querySelector(".header__burger");
    burger.addEventListener("click", () => {
      nav.classList.add("header__nav_active");
    });

    const close = document.querySelector(".header__nav-close");
    close.addEventListener("click", () => {
      nav.classList.remove("header__nav_active");
    });
}());