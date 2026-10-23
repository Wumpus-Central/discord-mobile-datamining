// === Module 15500: ? ===

// Module 15500

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};