// === Module 14059: ? ===

// Module 14059

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};