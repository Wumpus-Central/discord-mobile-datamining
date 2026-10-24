// === Module 15608: setupURLPolyfill ===

// Module 15608 (setupURLPolyfill)
import _modDef15610 from "module_15610" /* 15610 */;
import _mod15611 from "module_15611" /* 15611 */;
import _mod15624 from "module_15624" /* 15624 */;
import get_ActivityIndicator from "module_15609" /* 15609 */;

const require = globalThis.__r;

for (const key10016 in require("module_15611")) {
  arg5[key10016] = require("module_15611")[key10016];
  continue;
}
for (const key10020 in require("module_15624")) {
  arg5[key10020] = require("module_15624")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15610.name + "@" + _modDef15610.version;
  globalThis.URL = _mod15611.URL;
  globalThis.URLSearchParams = _mod15624.URLSearchParams;
};