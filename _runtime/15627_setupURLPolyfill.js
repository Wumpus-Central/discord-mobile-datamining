// === Module 15627: setupURLPolyfill ===

// Module 15627 (setupURLPolyfill)
import _modDef15629 from "module_15629" /* 15629 */;
import _mod15630 from "module_15630" /* 15630 */;
import _mod15643 from "module_15643" /* 15643 */;
import get_ActivityIndicator from "module_15628" /* 15628 */;

const require = globalThis.__r;

for (const key10016 in require("module_15630")) {
  arg5[key10016] = require("module_15630")[key10016];
  continue;
}
for (const key10020 in require("module_15643")) {
  arg5[key10020] = require("module_15643")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15629.name + "@" + _modDef15629.version;
  globalThis.URL = _mod15630.URL;
  globalThis.URLSearchParams = _mod15643.URLSearchParams;
}