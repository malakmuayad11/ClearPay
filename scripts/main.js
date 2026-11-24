import { loadComponent } from "./layout.js";
import { UI } from "./UI.js";
import { changeEstimatedResult, getEstimatedResult } from "./calculator.js";
import { changeFeatures } from "./features.js";
import { submitForm } from "./contact.js";
import { switchTheme } from "./theme.js";
import { getTheme } from "./persistence.js";

// Load Components and Initialize Theme
async function initializeLayout() {
  try {
    await Promise.all([
      loadComponent(
        "#header",
        "https://malakmuayad11.github.io/ClearPay/components/header.html",
      ),
      loadComponent(
        "#footer",
        "https://malakmuayad11.github.io/ClearPay/components/footer.html",
      ),
    ]);

    const currentPage = window.location.pathname;

    document.querySelectorAll(".header__nav a").forEach((link) => {
      const linkPath = new URL(link.href).pathname;

      const isActive =
        linkPath === currentPage ||
        (currentPage.endsWith("/") && linkPath.endsWith("/index.html"));

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    // Select theme buttons after the header loads
    const lightBtn = document.getElementById("light-btn");
    const darkBtn = document.getElementById("dark-btn");

    // Initialize saved theme
    const savedTheme = getTheme() || "light";
    switchTheme(UI.root, savedTheme);

    // Update selected theme button
    lightBtn?.classList.toggle("selected-theme", savedTheme === "light");

    darkBtn?.classList.toggle("selected-theme", savedTheme === "dark");

    // Register theme event listeners
    darkBtn?.addEventListener("click", () => {
      switchTheme(UI.root, "dark");

      darkBtn.classList.add("selected-theme");
      lightBtn?.classList.remove("selected-theme");
    });

    lightBtn?.addEventListener("click", () => {
      switchTheme(UI.root, "light");

      lightBtn.classList.add("selected-theme");
      darkBtn?.classList.remove("selected-theme");
    });
  } catch (error) {
    console.error("Error initializing layout:", error);
  }
}

// Initialize layout
initializeLayout();

// Calculator
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

// Features
if (UI.featuresButtons.length > 0 && UI.featuresCards) {
  UI.featuresButtons.forEach((button) => {
    button.addEventListener("click", changeFeatures);
  });
}

// Contact Form
if (UI.sendBtn) {
  UI.sendBtn.addEventListener("click", submitForm);
}

if (UI.form) {
  UI.form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
  });
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
