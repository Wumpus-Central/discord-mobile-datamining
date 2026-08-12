// _runtime/13617_shouldPolyfill.js
arg5.shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};