// === Module 13937: ? ===

// Module 13937

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};