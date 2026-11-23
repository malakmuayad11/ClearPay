import { saveTheme } from "./persistence.js";

export function switchTheme(root, newTheme) {
  root.dataset.theme = newTheme;
  saveTheme(newTheme);
}
