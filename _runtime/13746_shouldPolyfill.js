// === Module 13746: shouldPolyfill ===

// Module 13746 (shouldPolyfill)
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};