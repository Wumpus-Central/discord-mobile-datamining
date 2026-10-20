// === Module 15350: ? ===

// Module 15350

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};