// === Module 14619: setupURLPolyfill ===

// Module 14619 (setupURLPolyfill)
import _modDef14621 from "module_14621" /* 14621 */;
import _mod14622 from "module_14622" /* 14622 */;
import _mod14635 from "module_14635" /* 14635 */;
import get_ActivityIndicator from "module_14620" /* 14620 */;

const require = globalThis.__r;

for (const key10016 in require("module_14622")) {
  arg5[key10016] = require("module_14622")[key10016];
  continue;
}
for (const key10020 in require("module_14635")) {
  arg5[key10020] = require("module_14635")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14621.name + "@" + _modDef14621.version;
  globalThis.URL = _mod14622.URL;
  globalThis.URLSearchParams = _mod14635.URLSearchParams;
};