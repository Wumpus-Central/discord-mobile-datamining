// === Module 14393: setupURLPolyfill ===

// Module 14393 (setupURLPolyfill)
import _modDef14395 from "module_14395" /* 14395 */;
import _mod14396 from "module_14396" /* 14396 */;
import _mod14409 from "module_14409" /* 14409 */;
import get_ActivityIndicator from "module_14394" /* 14394 */;

for (const key10016 in require("module_14396")) {
  arg5[key10016] = require("module_14396")[key10016];
  continue;
}
for (const key10020 in require("module_14409")) {
  arg5[key10020] = require("module_14409")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14395.name + "@" + _modDef14395.version;
  globalThis.URL = _mod14396.URL;
  globalThis.URLSearchParams = _mod14409.URLSearchParams;
};