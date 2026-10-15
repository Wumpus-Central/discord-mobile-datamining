// === Module 15186: ? ===

// Module 15186

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};