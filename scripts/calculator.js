import { UI } from "./UI.js";

export function changeEstimatedResult(e) {
  const volume = Number(e.target.value);

  UI.volumeValue.textContent = `$${volume.toLocaleString("en-US")}`;
}

function getTransactionFee() {
  const selectedPlan = document.querySelector('input[name="plan"]:checked');

  switch (selectedPlan.value) {
    case "starter":
      return 0.02;

    case "professional":
      return 0.015;

    case "business":
      return 0.01;

    default:
      return 0;
  }
}

export function getEstimatedResult() {
  const result = getTransactionFee() * UI.volume.value;
  UI.estimatedCost.textContent = `$${result}`;
}
