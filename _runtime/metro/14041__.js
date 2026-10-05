// === Module 14041: ? ===

// Module 14041

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};