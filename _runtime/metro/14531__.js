// === Module 14531: ? ===

// Module 14531

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};