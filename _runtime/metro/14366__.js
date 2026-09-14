// === Module 14366: ? ===

// Module 14366

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};