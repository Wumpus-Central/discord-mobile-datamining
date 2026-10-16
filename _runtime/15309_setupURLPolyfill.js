// === Module 15309: setupURLPolyfill ===

// Module 15309 (setupURLPolyfill)
import _modDef15311 from "module_15311" /* 15311 */;
import _mod15312 from "module_15312" /* 15312 */;
import _mod15325 from "module_15325" /* 15325 */;
import get_ActivityIndicator from "module_15310" /* 15310 */;

const require = globalThis.__r;

for (const key10016 in require("module_15312")) {
  arg5[key10016] = require("module_15312")[key10016];
  continue;
}
for (const key10020 in require("module_15325")) {
  arg5[key10020] = require("module_15325")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15311.name + "@" + _modDef15311.version;
  globalThis.URL = _mod15312.URL;
  globalThis.URLSearchParams = _mod15325.URLSearchParams;
};