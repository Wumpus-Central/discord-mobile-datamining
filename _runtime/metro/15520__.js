// === Module 15520: ? ===

// Module 15520

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};