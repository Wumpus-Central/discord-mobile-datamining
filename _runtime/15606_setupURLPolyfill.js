// === Module 15606: setupURLPolyfill ===

// Module 15606 (setupURLPolyfill)
import _modDef15608 from "module_15608" /* 15608 */;
import _mod15609 from "module_15609" /* 15609 */;
import _mod15622 from "module_15622" /* 15622 */;
import get_ActivityIndicator from "module_15607" /* 15607 */;

const require = globalThis.__r;

for (const key10016 in require("module_15609")) {
  arg5[key10016] = require("module_15609")[key10016];
  continue;
}
for (const key10020 in require("module_15622")) {
  arg5[key10020] = require("module_15622")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15608.name + "@" + _modDef15608.version;
  globalThis.URL = _mod15609.URL;
  globalThis.URLSearchParams = _mod15622.URLSearchParams;
}