// _runtime/13466_shouldPolyfill.js
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};