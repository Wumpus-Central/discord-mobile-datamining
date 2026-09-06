// === Module 14365: setupURLPolyfill ===

// Module 14365 (setupURLPolyfill)
import _modDef14367 from "module_14367" /* 14367 */;
import _mod14368 from "module_14368" /* 14368 */;
import _mod14381 from "module_14381" /* 14381 */;
import get_ActivityIndicator from "module_14366" /* 14366 */;

for (const key10016 in require("module_14368")) {
  arg5[key10016] = require("module_14368")[key10016];
  continue;
}
for (const key10020 in require("module_14381")) {
  arg5[key10020] = require("module_14381")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14367.name + "@" + _modDef14367.version;
  globalThis.URL = _mod14368.URL;
  globalThis.URLSearchParams = _mod14381.URLSearchParams;
};