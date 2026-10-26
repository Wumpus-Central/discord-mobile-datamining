// === Module 15612: setupURLPolyfill ===

// Module 15612 (setupURLPolyfill)
import _modDef15614 from "module_15614" /* 15614 */;
import _mod15615 from "module_15615" /* 15615 */;
import _mod15628 from "module_15628" /* 15628 */;
import get_ActivityIndicator from "module_15613" /* 15613 */;

const require = globalThis.__r;

for (const key10016 in require("module_15615")) {
  arg5[key10016] = require("module_15615")[key10016];
  continue;
}
for (const key10020 in require("module_15628")) {
  arg5[key10020] = require("module_15628")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15614.name + "@" + _modDef15614.version;
  globalThis.URL = _mod15615.URL;
  globalThis.URLSearchParams = _mod15628.URLSearchParams;
};