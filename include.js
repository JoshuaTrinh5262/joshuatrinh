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
});
