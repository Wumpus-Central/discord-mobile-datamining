// _runtime/13609_shouldPolyfill.js
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};