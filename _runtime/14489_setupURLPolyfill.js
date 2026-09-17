// === Module 14489: setupURLPolyfill ===

// Module 14489 (setupURLPolyfill)
import _modDef14491 from "module_14491" /* 14491 */;
import _mod14492 from "module_14492" /* 14492 */;
import _mod14505 from "module_14505" /* 14505 */;
import get_ActivityIndicator from "module_14490" /* 14490 */;

const require = globalThis.__r;

for (const key10016 in require("module_14492")) {
  arg5[key10016] = require("module_14492")[key10016];
  continue;
}
for (const key10020 in require("module_14505")) {
  arg5[key10020] = require("module_14505")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14491.name + "@" + _modDef14491.version;
  globalThis.URL = _mod14492.URL;
  globalThis.URLSearchParams = _mod14505.URLSearchParams;
};