// === Module 15300: ? ===

// Module 15300

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};