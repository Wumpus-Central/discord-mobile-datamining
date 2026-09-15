// === Module 14375: ? ===

// Module 14375

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};