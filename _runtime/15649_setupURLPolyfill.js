// === Module 15649: setupURLPolyfill ===

// Module 15649 (setupURLPolyfill)
import _modDef15651 from "module_15651" /* 15651 */;
import _mod15652 from "module_15652" /* 15652 */;
import _mod15665 from "module_15665" /* 15665 */;
import get_ActivityIndicator from "module_15650" /* 15650 */;

const require = globalThis.__r;

for (const key10016 in require("module_15652")) {
  arg5[key10016] = require("module_15652")[key10016];
  continue;
}
for (const key10020 in require("module_15665")) {
  arg5[key10020] = require("module_15665")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15651.name + "@" + _modDef15651.version;
  globalThis.URL = _mod15652.URL;
  globalThis.URLSearchParams = _mod15665.URLSearchParams;
};