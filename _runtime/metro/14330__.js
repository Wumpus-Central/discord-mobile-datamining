// === Module 14330: ? ===

// Module 14330

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};