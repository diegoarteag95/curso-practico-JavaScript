const navToggle = document.querySelector(`.header__toggle`);
const navMenu = document.querySelector(`.header__menu`);

navToggle.addEventListener(`click`, () => {
    navMenu.classList.toggle(`header_visible`)
})