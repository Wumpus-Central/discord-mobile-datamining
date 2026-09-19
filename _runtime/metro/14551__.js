// === Module 14551: ? ===

// Module 14551

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};