// === Module 14652: ? ===

// Module 14652

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};