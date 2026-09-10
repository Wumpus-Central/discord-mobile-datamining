// === Module 14442: setupURLPolyfill ===

// Module 14442 (setupURLPolyfill)
import _modDef14444 from "module_14444" /* 14444 */;
import _mod14445 from "module_14445" /* 14445 */;
import _mod14458 from "module_14458" /* 14458 */;
import get_ActivityIndicator from "module_14443" /* 14443 */;

for (const key10016 in require("module_14445")) {
  arg5[key10016] = require("module_14445")[key10016];
  continue;
}
for (const key10020 in require("module_14458")) {
  arg5[key10020] = require("module_14458")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14444.name + "@" + _modDef14444.version;
  globalThis.URL = _mod14445.URL;
  globalThis.URLSearchParams = _mod14458.URLSearchParams;
};