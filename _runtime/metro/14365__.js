// === Module 14365: ? ===

// Module 14365

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};