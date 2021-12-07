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