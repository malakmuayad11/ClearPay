import { loadComponent } from "./layout.js";
import { UI } from "./UI.js";
import { changeEstimatedResult, getEstimatedResult } from "./calculator.js";
import { changeFeatures } from "./features.js";

loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");

// Initialize calculator only on pages that contain it
if (UI.volume && UI.estimatedCost) {
  UI.volume.addEventListener("input", () => {
    changeEstimatedResult();
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
