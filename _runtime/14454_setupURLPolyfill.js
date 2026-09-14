// === Module 14454: setupURLPolyfill ===

// Module 14454 (setupURLPolyfill)
import _modDef14456 from "module_14456" /* 14456 */;
import _mod14457 from "module_14457" /* 14457 */;
import _mod14470 from "module_14470" /* 14470 */;
import get_ActivityIndicator from "module_14455" /* 14455 */;

const require = globalThis.__r;

for (const key10016 in require("module_14457")) {
  arg5[key10016] = require("module_14457")[key10016];
  continue;
}
for (const key10020 in require("module_14470")) {
  arg5[key10020] = require("module_14470")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14456.name + "@" + _modDef14456.version;
  globalThis.URL = _mod14457.URL;
  globalThis.URLSearchParams = _mod14470.URLSearchParams;
};