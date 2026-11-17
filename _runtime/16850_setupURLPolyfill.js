// === Module 16850: setupURLPolyfill ===

// Module 16850 (setupURLPolyfill)
import _modDef16852 from "module_16852" /* 16852 */;
import _mod16853 from "module_16853" /* 16853 */;
import _mod16866 from "module_16866" /* 16866 */;
import get_ActivityIndicator from "module_16851" /* 16851 */;

const require = globalThis.__r;

for (const key10016 in require("module_16853")) {
  arg5[key10016] = require("module_16853")[key10016];
  continue;
}
for (const key10020 in require("module_16866")) {
  arg5[key10020] = require("module_16866")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16852.name + "@" + _modDef16852.version;
  globalThis.URL = _mod16853.URL;
  globalThis.URLSearchParams = _mod16866.URLSearchParams;
}