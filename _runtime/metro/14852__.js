// === Module 14852: ? ===

// Module 14852

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};