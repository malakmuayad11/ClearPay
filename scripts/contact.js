import { UI } from "./UI.js";

function resetForm() {
  UI.nameField.value = "";
  UI.emailField.value = "";
  UI.messageField.value = "";
}

export function submitForm() {
  let message = "";

  if (UI.nameField.value.trim().length === 0) {
    message = "✖ Name is required.";
  } else if (UI.emailField.value.trim().length === 0) {
    message = "✖ Email is required.";
  } else if (UI.messageField.value.trim().length === 0) {
    message = "✖ Message is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(UI.emailField.value.trim())) {
    message = "✖ Email format is invalid.";
  } else {
    message = "✔ Your message has been sent successfully!";
  }

  UI.toast.textContent = message;

  UI.toast.classList.add("toast--visible");

  setTimeout(() => {
    UI.toast.classList.remove("toast--visible");
  }, 3000);
  resetForm();
}
