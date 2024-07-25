
// JavaScript для обработки клика по кнопке бургер-меню
const burgerMenuButton = document.getElementById('burgerBtn')
const mainNav = document.getElementById('mainNav')

burgerMenuButton.addEventListener('click', () => {
    // Переключаем класс для изменения положения меню
    mainNav.classList.toggle('show-menu')
})
