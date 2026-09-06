// _runtime/metro/00174__.js
import polyfillObjectProperty from "../00123_polyfillObjectProperty.js";

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
