// === Module 15483: setupURLPolyfill ===

// Module 15483 (setupURLPolyfill)
import _modDef15485 from "module_15485" /* 15485 */;
import _mod15486 from "module_15486" /* 15486 */;
import _mod15499 from "module_15499" /* 15499 */;
import get_ActivityIndicator from "module_15484" /* 15484 */;

const require = globalThis.__r;

for (const key10016 in require("module_15486")) {
  arg5[key10016] = require("module_15486")[key10016];
  continue;
}
for (const key10020 in require("module_15499")) {
  arg5[key10020] = require("module_15499")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15485.name + "@" + _modDef15485.version;
  globalThis.URL = _mod15486.URL;
  globalThis.URLSearchParams = _mod15499.URLSearchParams;
}