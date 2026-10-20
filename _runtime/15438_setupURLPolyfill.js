// === Module 15438: setupURLPolyfill ===

// Module 15438 (setupURLPolyfill)
import _modDef15440 from "module_15440" /* 15440 */;
import _mod15441 from "module_15441" /* 15441 */;
import _mod15454 from "module_15454" /* 15454 */;
import get_ActivityIndicator from "module_15439" /* 15439 */;

const require = globalThis.__r;

for (const key10016 in require("module_15441")) {
  arg5[key10016] = require("module_15441")[key10016];
  continue;
}
for (const key10020 in require("module_15454")) {
  arg5[key10020] = require("module_15454")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15440.name + "@" + _modDef15440.version;
  globalThis.URL = _mod15441.URL;
  globalThis.URLSearchParams = _mod15454.URLSearchParams;
};