import { loadComponent } from "./layout.js";
import { UI } from "./UI.js";
import { changeEstimatedResult, getEstimatedResult } from "./calculator.js";

loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");

UI.volume.addEventListener("input", (e) => {
  changeEstimatedResult(e);
  getEstimatedResult();
});

UI.transactionFees.forEach((tf) => {
  tf.addEventListener("change", getEstimatedResult);
});

// Initialize the displayed values
getEstimatedResult();
