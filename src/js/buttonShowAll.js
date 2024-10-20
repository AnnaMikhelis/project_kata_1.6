let showAll = document.querySelector('.show-all')
let buttonShow = document.querySelector('.button-show')
let brandsHidden = document.querySelectorAll('.brands-list__brand--hidden')
let showArrow = document.querySelector('.show-arrow')

showAll.addEventListener('click', function (evt) {
  for (let i = 0; i < brandsHidden.length; i++) {
    let brandHidden = brandsHidden[i]
    brandHidden.classList.toggle('brands-list__brand--hidden')
    showArrow.classList.toggle('show-all--rotate')

    if (buttonShow.textContent === 'Показать все') {
      buttonShow.textContent = 'Скрыть'
    } else {
      buttonShow.textContent = 'Показать все'
    }
  }
})
