// === Module 13361: shouldPolyfill ===

// Module 13361 (shouldPolyfill)
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};