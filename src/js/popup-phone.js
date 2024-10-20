const popupPhone = document.querySelector('.popup-phone')
const openPhoneBurger = document.querySelector('.burger-icon__phone')
const closePhone = document.querySelector('.close-phone')
const openPhoneHeader = document.querySelector('.open-phone-header')

openPhoneBurger.addEventListener('click', function (evt) {
  popupPhone.classList.remove('hidden')
})

openPhoneHeader.addEventListener('click', function (evt) {
  popupPhone.classList.remove('hidden')
})

closePhone.addEventListener('click', function (evt) {
  popupPhone.classList.add('hidden')
})
