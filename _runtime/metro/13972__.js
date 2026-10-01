// === Module 13972: ? ===

// Module 13972

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};