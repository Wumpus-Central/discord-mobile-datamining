// === Module 14890: ? ===

// Module 14890

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};