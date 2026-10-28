// === Module 15787: ? ===

// Module 15787

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};