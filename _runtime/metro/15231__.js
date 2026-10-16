// === Module 15231: ? ===

// Module 15231

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};