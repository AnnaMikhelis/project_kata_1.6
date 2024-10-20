let showAllTech = document.querySelector('.show-all-tech')
let buttonShowTech = document.querySelector('.button-show-tech')
let techsHidden = document.querySelectorAll('.techs-list__tech--hidden')
let showArrowTech = document.querySelector('.show-arrow-tech')

showAllTech.addEventListener('click', function (evt) {
  for (let i = 0; i < techsHidden.length; i++) {
    let techHidden = techsHidden[i]
    techHidden.classList.toggle('techs-list__tech--hidden')
    showArrowTech.classList.toggle('show-all-tech--rotate')

    if (buttonShowTech.textContent === 'Показать все') {
      buttonShowTech.textContent = 'Скрыть'
    } else {
      buttonShowTech.textContent = 'Показать все'
    }
  }
})
