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

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if(menuToggle) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        console.log("Menu toggle clicked!");
  });
  }
});
