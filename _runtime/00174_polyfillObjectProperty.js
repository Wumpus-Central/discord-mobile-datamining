// _runtime/00174_polyfillObjectProperty.js
import polyfillObjectProperty from "00123_polyfillObjectProperty.js";
import { finally } from "00175_finally.js";

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
  _module.polyfillGlobal("Promise", () => finally.default);
}