// === Module 13901: setupURLPolyfill ===

// Module 13901 (setupURLPolyfill)
import _modDef13903 from "module_13903" /* 13903 */;
import _mod13904 from "module_13904" /* 13904 */;
import _mod13917 from "module_13917" /* 13917 */;
import get_ActivityIndicator from "module_13902" /* 13902 */;

const require = globalThis.__r;

for (const key10016 in require("module_13904")) {
  arg5[key10016] = require("module_13904")[key10016];
  continue;
}
for (const key10020 in require("module_13917")) {
  arg5[key10020] = require("module_13917")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13903.name + "@" + _modDef13903.version;
  globalThis.URL = _mod13904.URL;
  globalThis.URLSearchParams = _mod13917.URLSearchParams;
};