// === Module 14401: ? ===

// Module 14401

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};