// === Module 15588: setupURLPolyfill ===

// Module 15588 (setupURLPolyfill)
import _modDef15590 from "module_15590" /* 15590 */;
import _mod15591 from "module_15591" /* 15591 */;
import _mod15604 from "module_15604" /* 15604 */;
import get_ActivityIndicator from "module_15589" /* 15589 */;

const require = globalThis.__r;

for (const key10016 in require("module_15591")) {
  arg5[key10016] = require("module_15591")[key10016];
  continue;
}
for (const key10020 in require("module_15604")) {
  arg5[key10020] = require("module_15604")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15590.name + "@" + _modDef15590.version;
  globalThis.URL = _mod15591.URL;
  globalThis.URLSearchParams = _mod15604.URLSearchParams;
};