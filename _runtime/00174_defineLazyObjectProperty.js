// _runtime/00174_defineLazyObjectProperty.js
import defineLazyObjectProperty from "00123_defineLazyObjectProperty.js";

const require = globalThis.__r;

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
  const _module = defineLazyObjectProperty;
  _module.polyfillGlobal("Promise", () => require("metro/00175__.js").default);
}
