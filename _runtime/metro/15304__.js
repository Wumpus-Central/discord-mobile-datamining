// === Module 15304: ? ===

// Module 15304

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};