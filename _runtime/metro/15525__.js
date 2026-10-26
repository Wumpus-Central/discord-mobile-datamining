// === Module 15525: ? ===

// Module 15525

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};