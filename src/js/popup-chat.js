const popupChat = document.querySelector('.popup-chat')
const openChatBurger = document.querySelector('.burger-icon__chat')
const closeChat = document.querySelector('.close-chat')
const openChatHeader = document.querySelector('.open-chat-header')

openChatBurger.addEventListener('click', function (evt) {
  popupChat.classList.remove('hidden')
})

openChatHeader.addEventListener('click', function (evt) {
  popupChat.classList.remove('hidden')
})

closeChat.addEventListener('click', function (evt) {
  popupChat.classList.add('hidden')
})
