// === Module 15510: setupURLPolyfill ===

// Module 15510 (setupURLPolyfill)
import _modDef15512 from "module_15512" /* 15512 */;
import _mod15513 from "module_15513" /* 15513 */;
import _mod15526 from "module_15526" /* 15526 */;
import get_ActivityIndicator from "module_15511" /* 15511 */;

const require = globalThis.__r;

for (const key10016 in require("module_15513")) {
  arg5[key10016] = require("module_15513")[key10016];
  continue;
}
for (const key10020 in require("module_15526")) {
  arg5[key10020] = require("module_15526")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15512.name + "@" + _modDef15512.version;
  globalThis.URL = _mod15513.URL;
  globalThis.URLSearchParams = _mod15526.URLSearchParams;
};