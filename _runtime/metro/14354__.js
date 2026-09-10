// === Module 14354: ? ===

// Module 14354

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};