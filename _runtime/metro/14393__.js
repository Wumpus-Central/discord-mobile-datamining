// === Module 14393: ? ===

// Module 14393

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};