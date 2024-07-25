// const menuIcon = document.getElementById('menu-icon')
// menuIcon.disabled = true

// const btnCoffee = document.getElementById('btn-coffee')
// btnCoffee.disabled = true
console.log(
    'задание буду доделывать, на данный момент 52 балла.  пункт 1 - 1440 но увы с настройкой мобайл можно снизить 14/12.  пункт 4 -- полосы прокрутки не будет - есть оверфлоу клип 20/20. 8пункт -- валидатор чист 12/12. пункт 6 - бургер 4/4. 7пункт --- ховер 4/4 '
)
// JavaScript для обработки клика по кнопке бургер-меню
const burgerMenuButton = document.getElementById('burgerBtn')
const mainNav = document.getElementById('mainNav')

burgerMenuButton.addEventListener('click', () => {
    // Переключаем класс для изменения положения меню
    mainNav.classList.toggle('show-menu')
})
