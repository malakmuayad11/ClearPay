export async function loadComponent(selector, url) {
  const container = document.querySelector(selector);
  if (!container) return;

  const response = await fetch(url);
  container.innerHTML = await response.text();

  if (selector === "#header") {
    const currentPath = window.location.pathname;

    document.querySelectorAll(".header__nav a").forEach((link) => {
      const linkPath = new URL(link.href).pathname;

      if (linkPath === currentPath) {
        link.setAttribute("aria-current", "page");
      }
    });
  }
}
