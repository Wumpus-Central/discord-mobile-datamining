// === Module 13813: ? ===

// Module 13813

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};