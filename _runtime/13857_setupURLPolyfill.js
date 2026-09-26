// === Module 13857: setupURLPolyfill ===

// Module 13857 (setupURLPolyfill)
import _modDef13859 from "module_13859" /* 13859 */;
import _mod13860 from "module_13860" /* 13860 */;
import _mod13873 from "module_13873" /* 13873 */;
import get_ActivityIndicator from "module_13858" /* 13858 */;

const require = globalThis.__r;

for (const key10016 in require("module_13860")) {
  arg5[key10016] = require("module_13860")[key10016];
  continue;
}
for (const key10020 in require("module_13873")) {
  arg5[key10020] = require("module_13873")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13859.name + "@" + _modDef13859.version;
  globalThis.URL = _mod13860.URL;
  globalThis.URLSearchParams = _mod13873.URLSearchParams;
};