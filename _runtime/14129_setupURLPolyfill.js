// === Module 14129: setupURLPolyfill ===

// Module 14129 (setupURLPolyfill)
import _modDef14131 from "module_14131" /* 14131 */;
import _mod14132 from "module_14132" /* 14132 */;
import _mod14145 from "module_14145" /* 14145 */;
import get_ActivityIndicator from "module_14130" /* 14130 */;

const require = globalThis.__r;

for (const key10016 in require("module_14132")) {
  arg5[key10016] = require("module_14132")[key10016];
  continue;
}
for (const key10020 in require("module_14145")) {
  arg5[key10020] = require("module_14145")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14131.name + "@" + _modDef14131.version;
  globalThis.URL = _mod14132.URL;
  globalThis.URLSearchParams = _mod14145.URLSearchParams;
};