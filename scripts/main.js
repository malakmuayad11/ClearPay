import { loadComponent } from "./layout.js";
import { UI } from "./UI.js";
import { changeEstimatedResult, getEstimatedResult } from "./calculator.js";
import { changeFeatures } from "./features.js";
import { submitForm } from "./contact.js";
import { switchTheme } from "./theme.js";
import { getTheme } from "./persistence.js";

// Load components first
await loadComponent("#header", "/components/header.html");
await loadComponent("#footer", "/components/footer.html");

// Initialize theme
const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");

const savedTheme = getTheme() || "light";
switchTheme(UI.root, savedTheme);

// Update selected theme button
lightBtn?.classList.toggle("selected-theme", savedTheme === "light");
darkBtn?.classList.toggle("selected-theme", savedTheme === "dark");

// Register theme event listeners
if (lightBtn && darkBtn) {
  darkBtn.addEventListener("click", () => {
    switchTheme(UI.root, "dark");

    darkBtn.classList.add("selected-theme");
    lightBtn.classList.remove("selected-theme");
  });

  lightBtn.addEventListener("click", () => {
    switchTheme(UI.root, "light");

    lightBtn.classList.add("selected-theme");
    darkBtn.classList.remove("selected-theme");
  });
}

// Initialize calculator only on pages that contain it
if (UI.volume && UI.estimatedCost) {
  UI.volume.addEventListener("input", (e) => {
    changeEstimatedResult(e);
    getEstimatedResult();
  });

  UI.transactionFees.forEach((tf) => {
    tf.addEventListener("change", getEstimatedResult);
  });

  getEstimatedResult();
}

// Initialize features only on pages that contain them
if (UI.featuresButtons.length > 0 && UI.featuresCards) {
  UI.featuresButtons.forEach((button) => {
    button.addEventListener("click", changeFeatures);
  });
}

// Initialize contact form
if (UI.sendBtn) {
  UI.sendBtn.addEventListener("click", submitForm);
}

// Animations
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".animate-on-scroll").forEach((section) => {
  observer.observe(section);
});
