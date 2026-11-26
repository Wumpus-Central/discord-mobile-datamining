// === Module 15800: setupURLPolyfill ===

// Module 15800 (setupURLPolyfill)
import _modDef15802 from "module_15802" /* 15802 */;
import _mod15803 from "module_15803" /* 15803 */;
import _mod15816 from "module_15816" /* 15816 */;
import get_ActivityIndicator from "module_15801" /* 15801 */;

const require = globalThis.__r;

for (const key10016 in require("module_15803")) {
  arg5[key10016] = require("module_15803")[key10016];
  continue;
}
for (const key10020 in require("module_15816")) {
  arg5[key10020] = require("module_15816")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15802.name + "@" + _modDef15802.version;
  globalThis.URL = _mod15803.URL;
  globalThis.URLSearchParams = _mod15816.URLSearchParams;
}