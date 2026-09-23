// === Module 14643: ? ===

// Module 14643

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};