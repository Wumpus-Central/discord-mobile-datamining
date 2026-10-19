// === Module 15420: setupURLPolyfill ===

// Module 15420 (setupURLPolyfill)
import _modDef15422 from "module_15422" /* 15422 */;
import _mod15423 from "module_15423" /* 15423 */;
import _mod15436 from "module_15436" /* 15436 */;
import get_ActivityIndicator from "module_15421" /* 15421 */;

const require = globalThis.__r;

for (const key10016 in require("module_15423")) {
  arg5[key10016] = require("module_15423")[key10016];
  continue;
}
for (const key10020 in require("module_15436")) {
  arg5[key10020] = require("module_15436")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15422.name + "@" + _modDef15422.version;
  globalThis.URL = _mod15423.URL;
  globalThis.URLSearchParams = _mod15436.URLSearchParams;
};