const hambugerMenuu = document.getElementById("hamburger");
const navList = document.getElementById("nav-hambuger");


hambugerMenuu.addEventListener("click", () => {
          navList.classList.toggle("active");
          hambugerMenuu.classList.toggle("active");
});