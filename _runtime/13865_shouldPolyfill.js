// === Module 13865: shouldPolyfill ===

// Module 13865 (shouldPolyfill)
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};