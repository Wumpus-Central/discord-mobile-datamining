// === Module 15479: ? ===

// Module 15479

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};