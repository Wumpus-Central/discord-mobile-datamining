// === Module 174: ? ===

// Module 174
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

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
  const _module = polyfillObjectProperty;
  _module.polyfillGlobal("Promise", () => require("valuePromise").default);
}