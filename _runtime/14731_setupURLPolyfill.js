// === Module 14731: setupURLPolyfill ===

// Module 14731 (setupURLPolyfill)
import _modDef14733 from "module_14733" /* 14733 */;
import _mod14734 from "module_14734" /* 14734 */;
import _mod14747 from "module_14747" /* 14747 */;
import get_ActivityIndicator from "module_14732" /* 14732 */;

const require = globalThis.__r;

for (const key10016 in require("module_14734")) {
  arg5[key10016] = require("module_14734")[key10016];
  continue;
}
for (const key10020 in require("module_14747")) {
  arg5[key10020] = require("module_14747")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14733.name + "@" + _modDef14733.version;
  globalThis.URL = _mod14734.URL;
  globalThis.URLSearchParams = _mod14747.URLSearchParams;
};