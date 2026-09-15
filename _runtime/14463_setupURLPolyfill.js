// === Module 14463: setupURLPolyfill ===

// Module 14463 (setupURLPolyfill)
import _modDef14465 from "module_14465" /* 14465 */;
import _mod14466 from "module_14466" /* 14466 */;
import _mod14479 from "module_14479" /* 14479 */;
import get_ActivityIndicator from "module_14464" /* 14464 */;

const require = globalThis.__r;

for (const key10016 in require("module_14466")) {
  arg5[key10016] = require("module_14466")[key10016];
  continue;
}
for (const key10020 in require("module_14479")) {
  arg5[key10020] = require("module_14479")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14465.name + "@" + _modDef14465.version;
  globalThis.URL = _mod14466.URL;
  globalThis.URLSearchParams = _mod14479.URLSearchParams;
};