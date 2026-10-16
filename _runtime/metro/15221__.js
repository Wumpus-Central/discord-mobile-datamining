// === Module 15221: ? ===

// Module 15221

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};