// === Module 15613: setupURLPolyfill ===

// Module 15613 (setupURLPolyfill)
import _modDef15615 from "module_15615" /* 15615 */;
import _mod15616 from "module_15616" /* 15616 */;
import _mod15629 from "module_15629" /* 15629 */;
import get_ActivityIndicator from "module_15614" /* 15614 */;

const require = globalThis.__r;

for (const key10016 in require("module_15616")) {
  arg5[key10016] = require("module_15616")[key10016];
  continue;
}
for (const key10020 in require("module_15629")) {
  arg5[key10020] = require("module_15629")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15615.name + "@" + _modDef15615.version;
  globalThis.URL = _mod15616.URL;
  globalThis.URLSearchParams = _mod15629.URLSearchParams;
};