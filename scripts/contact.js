import { UI } from "./UI.js";

export function submitForm() {
  if (
    UI.emailField.value.length === 0 ||
    UI.nameField.value.length === 0 ||
    UI.messageField.value.length === 0
  ) {
    return false;
  }

  return true;
}
