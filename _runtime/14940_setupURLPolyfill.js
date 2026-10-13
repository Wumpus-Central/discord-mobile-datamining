// === Module 14940: setupURLPolyfill ===

// Module 14940 (setupURLPolyfill)
import _modDef14942 from "module_14942" /* 14942 */;
import _mod14943 from "module_14943" /* 14943 */;
import _mod14956 from "module_14956" /* 14956 */;
import get_ActivityIndicator from "module_14941" /* 14941 */;

const require = globalThis.__r;

for (const key10016 in require("module_14943")) {
  arg5[key10016] = require("module_14943")[key10016];
  continue;
}
for (const key10020 in require("module_14956")) {
  arg5[key10020] = require("module_14956")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14942.name + "@" + _modDef14942.version;
  globalThis.URL = _mod14943.URL;
  globalThis.URLSearchParams = _mod14956.URLSearchParams;
};