// === Module 14025: setupURLPolyfill ===

// Module 14025 (setupURLPolyfill)
import _modDef14027 from "module_14027" /* 14027 */;
import _mod14028 from "module_14028" /* 14028 */;
import _mod14041 from "module_14041" /* 14041 */;
import get_ActivityIndicator from "module_14026" /* 14026 */;

const require = globalThis.__r;

for (const key10016 in require("module_14028")) {
  arg5[key10016] = require("module_14028")[key10016];
  continue;
}
for (const key10020 in require("module_14041")) {
  arg5[key10020] = require("module_14041")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14027.name + "@" + _modDef14027.version;
  globalThis.URL = _mod14028.URL;
  globalThis.URLSearchParams = _mod14041.URLSearchParams;
};