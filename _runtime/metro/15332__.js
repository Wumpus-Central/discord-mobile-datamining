// === Module 15332: ? ===

// Module 15332

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};