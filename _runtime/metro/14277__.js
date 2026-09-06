// === Module 14277: ? ===

// Module 14277

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};