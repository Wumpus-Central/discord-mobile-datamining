// === Module 14127: setupURLPolyfill ===

// Module 14127 (setupURLPolyfill)
import _modDef14129 from "module_14129" /* 14129 */;
import _mod14130 from "module_14130" /* 14130 */;
import _mod14143 from "module_14143" /* 14143 */;
import get_ActivityIndicator from "module_14128" /* 14128 */;

const require = globalThis.__r;

for (const key10016 in require("module_14130")) {
  arg5[key10016] = require("module_14130")[key10016];
  continue;
}
for (const key10020 in require("module_14143")) {
  arg5[key10020] = require("module_14143")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14129.name + "@" + _modDef14129.version;
  globalThis.URL = _mod14130.URL;
  globalThis.URLSearchParams = _mod14143.URLSearchParams;
};