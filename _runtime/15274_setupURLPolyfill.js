// === Module 15274: setupURLPolyfill ===

// Module 15274 (setupURLPolyfill)
import _modDef15276 from "module_15276" /* 15276 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15290 from "module_15290" /* 15290 */;
import get_ActivityIndicator from "module_15275" /* 15275 */;

const require = globalThis.__r;

for (const key10016 in require("module_15277")) {
  arg5[key10016] = require("module_15277")[key10016];
  continue;
}
for (const key10020 in require("module_15290")) {
  arg5[key10020] = require("module_15290")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15276.name + "@" + _modDef15276.version;
  globalThis.URL = _mod15277.URL;
  globalThis.URLSearchParams = _mod15290.URLSearchParams;
};