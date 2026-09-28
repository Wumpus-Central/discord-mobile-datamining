// === Module 13856: setupURLPolyfill ===

// Module 13856 (setupURLPolyfill)
import _modDef13858 from "module_13858" /* 13858 */;
import _mod13859 from "module_13859" /* 13859 */;
import _mod13872 from "module_13872" /* 13872 */;
import get_ActivityIndicator from "module_13857" /* 13857 */;

const require = globalThis.__r;

for (const key10016 in require("module_13859")) {
  arg5[key10016] = require("module_13859")[key10016];
  continue;
}
for (const key10020 in require("module_13872")) {
  arg5[key10020] = require("module_13872")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13858.name + "@" + _modDef13858.version;
  globalThis.URL = _mod13859.URL;
  globalThis.URLSearchParams = _mod13872.URLSearchParams;
};