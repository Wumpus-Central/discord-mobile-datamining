// === Module 14446: setupURLPolyfill ===

// Module 14446 (setupURLPolyfill)
import _modDef14448 from "module_14448" /* 14448 */;
import _mod14449 from "module_14449" /* 14449 */;
import _mod14462 from "module_14462" /* 14462 */;
import get_ActivityIndicator from "module_14447" /* 14447 */;

const require = globalThis.__r;

for (const key10016 in require("module_14449")) {
  arg5[key10016] = require("module_14449")[key10016];
  continue;
}
for (const key10020 in require("module_14462")) {
  arg5[key10020] = require("module_14462")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14448.name + "@" + _modDef14448.version;
  globalThis.URL = _mod14449.URL;
  globalThis.URLSearchParams = _mod14462.URLSearchParams;
};