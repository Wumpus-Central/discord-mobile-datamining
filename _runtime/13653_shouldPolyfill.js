// === Module 13653: shouldPolyfill ===

// Module 13653 (shouldPolyfill)
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};