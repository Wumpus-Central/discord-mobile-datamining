// === Module 13964: ? ===

// Module 13964

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};