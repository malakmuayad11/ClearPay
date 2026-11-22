import { UI } from "./UI.js";

const allFeatures = `<article class="card">
  <img
    class="card__icon"
    src="../assets/icons/lock-icon.svg"
    alt="Lock Icon"
    loading="lazy"
  />
  <h3>Bank-Level Security</h3>
  <p>Your data is protected with industry-leading encryption.</p>
</article>

<article class="card">
  <img
    class="card__icon"
    src="../assets/icons/analytics-icon.svg"
    alt="Analytics Icon"
    loading="lazy"
  />
  <h3>Detailed Analytics</h3>
  <p>Get insights into your finances.</p>
</article>

<article class="card">
  <img
    class="card__icon"
    src="../assets/icons/payment-icon.svg"
    alt="Payment Icon"
    loading="lazy"
  />
  <h3>Instant Payments</h3>
  <p>Send and receive money in real-time.</p>
</article>

<article class="card">
  <img
    class="card__icon"
    src="../assets/icons/budget-icon.svg"
    alt="Budget Icon"
    loading="lazy"
  />
  <h3>Smart Budgeting</h3>
  <p>Track spending and set goals.</p>
</article>`;

const paymentFeatures = `<article class="card">
  <img class="card__icon" src="../assets/icons/payment-icon.svg" alt="Payment Icon" loading="lazy" />
  <h3>Instant Payments</h3>
  <p>Process transactions quickly and give customers a seamless payment experience.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/credit-card-icon.svg" alt="Credit Card Icon" loading="lazy" />
  <h3>Multiple Payment Methods</h3>
  <p>Accept payments through credit cards, debit cards, and other popular payment methods.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/recurring-icon.svg" alt="Recurring Payments Icon" loading="lazy" />
  <h3>Recurring Payments</h3>
  <p>Automate subscription billing and collect recurring payments with ease.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/checkout-icon.svg" alt="Checkout Icon" loading="lazy" />
  <h3>Seamless Checkout</h3>
  <p>Provide customers with a simple and convenient checkout experience.</p>
</article>`;

const securityFeatures = `<article class="card">
  <img class="card__icon" src="../assets/icons/lock-icon.svg" alt="Lock Icon" loading="lazy" />
  <h3>Bank-Level Encryption</h3>
  <p>Protect sensitive customer information with advanced data encryption.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/shield-icon.svg" alt="Shield Icon" loading="lazy" />
  <h3>Fraud Detection</h3>
  <p>Identify suspicious transactions and help prevent unauthorized payments.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/verified-icon.svg" alt="Verified Icon" loading="lazy" />
  <h3>Secure Authentication</h3>
  <p>Verify user identities with secure authentication mechanisms.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/monitoring-icon.svg" alt="Monitoring Icon" loading="lazy" />
  <h3>24/7 Transaction Monitoring</h3>
  <p>Monitor payment activity to detect unusual behavior and potential threats.</p>
</article>`;

const analyticsFeatures = `<article class="card">
  <img class="card__icon" src="../assets/icons/analytics-icon.svg" alt="Analytics Icon" loading="lazy" />
  <h3>Real-Time Analytics</h3>
  <p>Track transactions and monitor your business performance as it happens.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/report-icon.svg" alt="Report Icon" loading="lazy" />
  <h3>Detailed Financial Reports</h3>
  <p>Generate comprehensive reports to understand your revenue and expenses.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/chart-icon.svg" alt="Chart Icon" loading="lazy" />
  <h3>Performance Insights</h3>
  <p>Identify trends and discover opportunities to improve your business performance.</p>
</article>

<article class="card">
  <img class="card__icon" src="../assets/icons/dashboard-icon.svg" alt="Dashboard Icon" loading="lazy" />
  <h3>Customizable Dashboard</h3>
  <p>View your most important financial metrics in one convenient place.</p>
</article>`;

export function changeFeatures(e) {
  const filter = e.currentTarget.dataset.filter;

  UI.featuresButtons.forEach((button) => {
    const isActive = button === e.currentTarget;

    button.setAttribute("aria-pressed", isActive);
    button.className = isActive ? "button--primary" : "button--secondary";
  });

  if (filter === "all") UI.featuresCards.innerHTML = allFeatures;
  else if (filter === "payments") UI.featuresCards.innerHTML = paymentFeatures;
  else if (filter === "security") UI.featuresCards.innerHTML = securityFeatures;
  else if (filter === "analytics")
    UI.featuresCards.innerHTML = analyticsFeatures;
}
