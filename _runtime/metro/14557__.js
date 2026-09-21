// === Module 14557: ? ===

// Module 14557

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};