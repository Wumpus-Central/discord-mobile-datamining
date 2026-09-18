// === Module 14496: ? ===

// Module 14496

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};