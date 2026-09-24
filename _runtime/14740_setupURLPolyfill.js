// === Module 14740: setupURLPolyfill ===

// Module 14740 (setupURLPolyfill)
import _modDef14742 from "module_14742" /* 14742 */;
import _mod14743 from "module_14743" /* 14743 */;
import _mod14756 from "module_14756" /* 14756 */;
import get_ActivityIndicator from "module_14741" /* 14741 */;

const require = globalThis.__r;

for (const key10016 in require("module_14743")) {
  arg5[key10016] = require("module_14743")[key10016];
  continue;
}
for (const key10020 in require("module_14756")) {
  arg5[key10020] = require("module_14756")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14742.name + "@" + _modDef14742.version;
  globalThis.URL = _mod14743.URL;
  globalThis.URLSearchParams = _mod14756.URLSearchParams;
};