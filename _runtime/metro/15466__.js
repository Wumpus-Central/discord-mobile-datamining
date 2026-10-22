// === Module 15466: ? ===

// Module 15466

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};