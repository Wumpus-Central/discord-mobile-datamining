// === Module 14052: setupURLPolyfill ===

// Module 14052 (setupURLPolyfill)
import _modDef14054 from "module_14054" /* 14054 */;
import _mod14055 from "module_14055" /* 14055 */;
import _mod14068 from "module_14068" /* 14068 */;
import get_ActivityIndicator from "module_14053" /* 14053 */;

const require = globalThis.__r;

for (const key10016 in require("module_14055")) {
  arg5[key10016] = require("module_14055")[key10016];
  continue;
}
for (const key10020 in require("module_14068")) {
  arg5[key10020] = require("module_14068")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14054.name + "@" + _modDef14054.version;
  globalThis.URL = _mod14055.URL;
  globalThis.URLSearchParams = _mod14068.URLSearchParams;
};