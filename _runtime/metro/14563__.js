// === Module 14563: ? ===

// Module 14563

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};