// === Module 15875: setupURLPolyfill ===

// Module 15875 (setupURLPolyfill)
import _modDef15877 from "module_15877" /* 15877 */;
import _mod15878 from "module_15878" /* 15878 */;
import _mod15891 from "module_15891" /* 15891 */;
import get_ActivityIndicator from "module_15876" /* 15876 */;

const require = globalThis.__r;

for (const key10016 in require("module_15878")) {
  arg5[key10016] = require("module_15878")[key10016];
  continue;
}
for (const key10020 in require("module_15891")) {
  arg5[key10020] = require("module_15891")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15877.name + "@" + _modDef15877.version;
  globalThis.URL = _mod15878.URL;
  globalThis.URLSearchParams = _mod15891.URLSearchParams;
};