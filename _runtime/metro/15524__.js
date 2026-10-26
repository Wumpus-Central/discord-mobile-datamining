// === Module 15524: ? ===

// Module 15524

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};