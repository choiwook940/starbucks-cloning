const search = document.querySelector(".search");
const searchInput = search.querySelector("input");

search.addEventListener("click", () => {
  searchInput.focus();
})

searchInput.addEventListener("focus", () => {
  search.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");
})

searchInput.addEventListener("blur", () => {
  search.classList.remove("focused");
  searchInput.setAttribute("placeholder", " ");
})

const badges = document.querySelector("header .badges");
window.addEventListener("scroll", _.throttle(() => {
  if(window.scrollY > 500){
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badges, 0.6, {
      opacity: 0,
      display: "none"
    })
  } else {
    gsap.to(badges, 0.6, {
      opacity: 1,
      display: "block"
    })
  }
}, 300))

// VISUAL Animation
const fadeIns = document.querySelectorAll(".visual .fade-in");
fadeIns.forEach((fadeIn, index) => {
  gsap.to(fadeIn, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
})

// NOTICE Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// NOTICE Promotion Swiper
new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true 
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// Promotion Toggle
const promotion = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleBtnIcon = promotionToggleBtn.querySelector(".material-icons");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    promotion.classList.add("hide");
    promotionToggleBtnIcon.textContent = "download"
  } else {
    promotion.classList.remove("hide");
    promotionToggleBtnIcon.textContent = "upload"
  }
})

// YOUTUBE cover
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject(".floating1", 1, 15)
floatingObject(".floating2", .5, 15)
floatingObject(".floating3", 1.5, 20)

// SCROLL MAGIC
const spys = document.querySelectorAll('section.scroll-spy')
spys.forEach(spy => {
  new ScrollMagic
    .Scene({
      triggerElement: spy,
      triggerHook: .8
    })
    .setClassToggle(spy, 'show')
    .addTo(new ScrollMagic.Controller());
})

// FOOTER Copyright Year
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); 