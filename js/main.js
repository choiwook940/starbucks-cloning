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
