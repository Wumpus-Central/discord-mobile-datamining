// === Module 14358: ? ===

// Module 14358

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};