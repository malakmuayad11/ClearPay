const BASE_PATH = "/ClearPay/";

export async function loadComponent(selector, path) {
  const element = document.querySelector(selector);

  if (!element) return;

  const response = await fetch(path);
  const html = await response.text();

  element.innerHTML = html;

  // Fix component asset and navigation paths.
  element.querySelectorAll("[src], [href]").forEach((item) => {
    const attribute = item.hasAttribute("src") ? "src" : "href";
    const value = item.getAttribute(attribute);

    if (value.startsWith("../") || value.startsWith("./")) {
      item.setAttribute(
        attribute,
        BASE_PATH + value.replace(/^(\.\.\/|\.\/)+/, ""),
      );
    }
  });
}
