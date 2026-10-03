// === Module 14039: ? ===

// Module 14039

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};