export function saveTheme(theme) {
  localStorage.setItem("theme", theme || "light");
}

export function getTheme() {
  return localStorage.getItem("theme");
}
