// === Module 14584: setupURLPolyfill ===

// Module 14584 (setupURLPolyfill)
import _modDef14586 from "module_14586" /* 14586 */;
import _mod14587 from "module_14587" /* 14587 */;
import _mod14600 from "module_14600" /* 14600 */;
import get_ActivityIndicator from "module_14585" /* 14585 */;

const require = globalThis.__r;

for (const key10016 in require("module_14587")) {
  arg5[key10016] = require("module_14587")[key10016];
  continue;
}
for (const key10020 in require("module_14600")) {
  arg5[key10020] = require("module_14600")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14586.name + "@" + _modDef14586.version;
  globalThis.URL = _mod14587.URL;
  globalThis.URLSearchParams = _mod14600.URLSearchParams;
};