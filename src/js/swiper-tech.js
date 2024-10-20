let swiper = null
function initSwiper() {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#swiper-pagination-tech',
      clickable: true
    }
  })
}
function destroySwiper() {
  if (swiper !== null) {
    swiper.destroy()
    swiper = null
  }
}
function checkScreenWidth() {
  if (window.innerWidth < 786) {
    destroySwiper()
    initSwiper()
  } else {
    destroySwiper(true, true)
  }
}

checkScreenWidth()
window.addEventListener('resize', function () {
  checkScreenWidth()
})
