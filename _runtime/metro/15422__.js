// === Module 15422: ? ===

// Module 15422

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};