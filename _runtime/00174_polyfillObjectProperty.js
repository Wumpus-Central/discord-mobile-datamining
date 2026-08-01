// === Module 174: polyfillObjectProperty ===

// Module 174 (polyfillObjectProperty)
let hasPromiseResult;
if (global != null) {
  const _HermesInternal = global.HermesInternal;
  if (_HermesInternal != null) {
    if (_HermesInternal.hasPromise != null) {
      hasPromiseResult = hasPromise();
    }
  }
}
if (!hasPromiseResult) {
  const _module = require("polyfillObjectProperty");
  _module.polyfillGlobal("Promise", () => require(175) /* finally */.default);
}