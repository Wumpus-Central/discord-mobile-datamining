// === Module 14508: ? ===

// Module 14508

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};