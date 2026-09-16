// === Module 14481: setupURLPolyfill ===

// Module 14481 (setupURLPolyfill)
import _modDef14483 from "module_14483" /* 14483 */;
import _mod14484 from "module_14484" /* 14484 */;
import _mod14497 from "module_14497" /* 14497 */;
import get_ActivityIndicator from "module_14482" /* 14482 */;

const require = globalThis.__r;

for (const key10016 in require("module_14484")) {
  arg5[key10016] = require("module_14484")[key10016];
  continue;
}
for (const key10020 in require("module_14497")) {
  arg5[key10020] = require("module_14497")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14483.name + "@" + _modDef14483.version;
  globalThis.URL = _mod14484.URL;
  globalThis.URLSearchParams = _mod14497.URLSearchParams;
};