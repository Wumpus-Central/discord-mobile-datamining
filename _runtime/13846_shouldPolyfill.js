// _runtime/13846_shouldPolyfill.js
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};