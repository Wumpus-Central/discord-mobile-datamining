// === Module 14454: ? ===

// Module 14454

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};