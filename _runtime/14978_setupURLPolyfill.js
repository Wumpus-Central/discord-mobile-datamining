// === Module 14978: setupURLPolyfill ===

// Module 14978 (setupURLPolyfill)
import _modDef14980 from "module_14980" /* 14980 */;
import _mod14981 from "module_14981" /* 14981 */;
import _mod14994 from "module_14994" /* 14994 */;
import get_ActivityIndicator from "module_14979" /* 14979 */;

const require = globalThis.__r;

for (const key10016 in require("module_14981")) {
  arg5[key10016] = require("module_14981")[key10016];
  continue;
}
for (const key10020 in require("module_14994")) {
  arg5[key10020] = require("module_14994")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14980.name + "@" + _modDef14980.version;
  globalThis.URL = _mod14981.URL;
  globalThis.URLSearchParams = _mod14994.URLSearchParams;
};