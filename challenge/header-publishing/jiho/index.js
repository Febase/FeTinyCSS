const moreButton = document.querySelector("#MoreButton");
const sideMenu = document.querySelector("#SideMenu");
const sideMenuBackDrop = document.querySelector("#SideMenuBackdrop");

moreButton.addEventListener("click", () => {
  sideMenu.classList.add("show");
  sideMenuBackDrop.classList.add("show");
});

sideMenuBackDrop.addEventListener("click", () => {
  closeSideMenu();
});

sideMenu.addEventListener("click", (event) => {
  if (event.target.matches(".MenuItem")) {
    closeSideMenu();
  }
});

const sideMenuCloseBtn = document.querySelector("#SideMenuCloseBtn");
sideMenuCloseBtn.addEventListener("click", () => {
  closeSideMenu();
});

function closeSideMenu() {
  sideMenu.classList.remove("show");
  sideMenuBackDrop.classList.remove("show");
}

function openSideMenu() {
  sideMenu.classList.add("show");
  sideMenuBackDrop.classList.add("show");
}
