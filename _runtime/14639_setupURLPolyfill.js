// === Module 14639: setupURLPolyfill ===

// Module 14639 (setupURLPolyfill)
import _modDef14641 from "module_14641" /* 14641 */;
import _mod14642 from "module_14642" /* 14642 */;
import _mod14655 from "module_14655" /* 14655 */;
import get_ActivityIndicator from "module_14640" /* 14640 */;

const require = globalThis.__r;

for (const key10016 in require("module_14642")) {
  arg5[key10016] = require("module_14642")[key10016];
  continue;
}
for (const key10020 in require("module_14655")) {
  arg5[key10020] = require("module_14655")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14641.name + "@" + _modDef14641.version;
  globalThis.URL = _mod14642.URL;
  globalThis.URLSearchParams = _mod14655.URLSearchParams;
};