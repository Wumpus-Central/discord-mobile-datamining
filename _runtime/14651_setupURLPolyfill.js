// === Module 14651: setupURLPolyfill ===

// Module 14651 (setupURLPolyfill)
import _modDef14653 from "module_14653" /* 14653 */;
import _mod14654 from "module_14654" /* 14654 */;
import _mod14667 from "module_14667" /* 14667 */;
import get_ActivityIndicator from "module_14652" /* 14652 */;

const require = globalThis.__r;

for (const key10016 in require("module_14654")) {
  arg5[key10016] = require("module_14654")[key10016];
  continue;
}
for (const key10020 in require("module_14667")) {
  arg5[key10020] = require("module_14667")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14653.name + "@" + _modDef14653.version;
  globalThis.URL = _mod14654.URL;
  globalThis.URLSearchParams = _mod14667.URLSearchParams;
};