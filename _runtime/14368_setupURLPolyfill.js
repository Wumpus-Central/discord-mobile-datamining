// === Module 14368: setupURLPolyfill ===

// Module 14368 (setupURLPolyfill)
import _modDef14370 from "module_14370" /* 14370 */;
import _mod14371 from "module_14371" /* 14371 */;
import _mod14384 from "module_14384" /* 14384 */;
import get_ActivityIndicator from "module_14369" /* 14369 */;

for (const key10016 in require("module_14371")) {
  arg5[key10016] = require("module_14371")[key10016];
  continue;
}
for (const key10020 in require("module_14384")) {
  arg5[key10020] = require("module_14384")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14370.name + "@" + _modDef14370.version;
  globalThis.URL = _mod14371.URL;
  globalThis.URLSearchParams = _mod14384.URLSearchParams;
};