// === Module 13769: ? ===

// Module 13769

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};