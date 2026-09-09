// === Module 14305: ? ===

// Module 14305

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};