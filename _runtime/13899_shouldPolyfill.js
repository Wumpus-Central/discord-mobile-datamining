// === Module 13899: shouldPolyfill ===

// Module 13899 (shouldPolyfill)
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};