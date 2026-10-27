// === Module 15561: ? ===

// Module 15561

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};