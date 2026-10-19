// === Module 15392: setupURLPolyfill ===

// Module 15392 (setupURLPolyfill)
import _modDef15394 from "module_15394" /* 15394 */;
import _mod15395 from "module_15395" /* 15395 */;
import _mod15408 from "module_15408" /* 15408 */;
import get_ActivityIndicator from "module_15393" /* 15393 */;

const require = globalThis.__r;

for (const key10016 in require("module_15395")) {
  arg5[key10016] = require("module_15395")[key10016];
  continue;
}
for (const key10020 in require("module_15408")) {
  arg5[key10020] = require("module_15408")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15394.name + "@" + _modDef15394.version;
  globalThis.URL = _mod15395.URL;
  globalThis.URLSearchParams = _mod15408.URLSearchParams;
};