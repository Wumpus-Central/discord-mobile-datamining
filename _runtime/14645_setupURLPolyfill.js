// === Module 14645: setupURLPolyfill ===

// Module 14645 (setupURLPolyfill)
import _modDef14647 from "module_14647" /* 14647 */;
import _mod14648 from "module_14648" /* 14648 */;
import _mod14661 from "module_14661" /* 14661 */;
import get_ActivityIndicator from "module_14646" /* 14646 */;

const require = globalThis.__r;

for (const key10016 in require("module_14648")) {
  arg5[key10016] = require("module_14648")[key10016];
  continue;
}
for (const key10020 in require("module_14661")) {
  arg5[key10020] = require("module_14661")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14647.name + "@" + _modDef14647.version;
  globalThis.URL = _mod14648.URL;
  globalThis.URLSearchParams = _mod14661.URLSearchParams;
};