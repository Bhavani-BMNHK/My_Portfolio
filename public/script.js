// Mobile nav
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open);
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}