// === Module 14453: setupURLPolyfill ===

// Module 14453 (setupURLPolyfill)
import _modDef14455 from "module_14455" /* 14455 */;
import _mod14456 from "module_14456" /* 14456 */;
import _mod14469 from "module_14469" /* 14469 */;
import get_ActivityIndicator from "module_14454" /* 14454 */;

for (const key10016 in require("module_14456")) {
  arg5[key10016] = require("module_14456")[key10016];
  continue;
}
for (const key10020 in require("module_14469")) {
  arg5[key10020] = require("module_14469")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14455.name + "@" + _modDef14455.version;
  globalThis.URL = _mod14456.URL;
  globalThis.URLSearchParams = _mod14469.URLSearchParams;
};