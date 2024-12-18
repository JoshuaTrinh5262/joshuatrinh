async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (element) {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    } else {
      console.error(`Failed to load ${file}`);
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("header", "header.html");
  await includeHTML("footer", "footer.html");

  initializeMenuToggle();
});
function initializeMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      console.log("Menu toggle clicked!");
    });
  } else {
    console.warn(".menu-toggle or .nav-links not found in the DOM");
  }
}
