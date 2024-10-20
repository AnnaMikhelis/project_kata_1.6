let burger = document.querySelector('.burger-menu')
let iconClose = document.querySelector('.header-mobile__icon--first')
let iconOpen = document.querySelector('.header__icon--burger')

iconClose.addEventListener('click', function (evt) {
  burger.classList.add('burger-hidden')
  burger.style.display = 'none'
})

iconOpen.addEventListener('click', function (evt) {
  burger.classList.remove('burger-hidden')
  burger.style.display = 'flex'
})
