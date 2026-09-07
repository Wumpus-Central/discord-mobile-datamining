// === Module 14280: ? ===

// Module 14280

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};