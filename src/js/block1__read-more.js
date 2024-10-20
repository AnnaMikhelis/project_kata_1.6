let readMore = document.querySelector('.read-more')
let buttonMore = document.querySelector('.button-more')
let textHidden = document.querySelector('.about-text--hidden')
let readMoreArrow = document.querySelector('.read-more-arrow')

readMore.addEventListener('click', function (evt) {
  textHidden.classList.toggle('hidden')
  readMoreArrow.classList.toggle('read-more--rotate')

  if (buttonMore.textContent === 'Читать далее') {
    buttonMore.textContent = 'Скрыть'
  } else {
    buttonMore.textContent = 'Читать далее'
  }
})
