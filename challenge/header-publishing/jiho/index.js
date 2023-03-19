const moreButton = document.querySelector("#MoreButton");
const sideMenu = document.querySelector("#SideMenu");
const sideMenuBackDrop = document.querySelector("#SideMenuBackdrop");

moreButton.addEventListener("click", () => {
  sideMenu.classList.add("show");
  sideMenuBackDrop.classList.add("show");
});

sideMenuBackDrop.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  sideMenuBackDrop.classList.remove("show");
});

sideMenu.addEventListener("click", (event) => {
  if (event.target.matches(".MenuItem")) {
    sideMenu.classList.remove("show");
    sideMenuBackDrop.classList.remove("show");
  }
});
