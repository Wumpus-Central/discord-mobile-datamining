// _runtime/13819_shouldPolyfill.js
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};