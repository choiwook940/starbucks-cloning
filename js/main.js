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
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
