// === Module 14060: setupURLPolyfill ===

// Module 14060 (setupURLPolyfill)
import _modDef14062 from "module_14062" /* 14062 */;
import _mod14063 from "module_14063" /* 14063 */;
import _mod14076 from "module_14076" /* 14076 */;
import get_ActivityIndicator from "module_14061" /* 14061 */;

const require = globalThis.__r;

for (const key10016 in require("module_14063")) {
  arg5[key10016] = require("module_14063")[key10016];
  continue;
}
for (const key10020 in require("module_14076")) {
  arg5[key10020] = require("module_14076")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14062.name + "@" + _modDef14062.version;
  globalThis.URL = _mod14063.URL;
  globalThis.URLSearchParams = _mod14076.URLSearchParams;
};