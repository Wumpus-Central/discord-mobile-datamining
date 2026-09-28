// === Module 13768: ? ===

// Module 13768

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};