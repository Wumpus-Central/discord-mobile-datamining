// === Module 15749: setupURLPolyfill ===

// Module 15749 (setupURLPolyfill)
import _modDef15751 from "module_15751" /* 15751 */;
import _mod15752 from "module_15752" /* 15752 */;
import _mod15765 from "module_15765" /* 15765 */;
import get_ActivityIndicator from "module_15750" /* 15750 */;

const require = globalThis.__r;

for (const key10016 in require("module_15752")) {
  arg5[key10016] = require("module_15752")[key10016];
  continue;
}
for (const key10020 in require("module_15765")) {
  arg5[key10020] = require("module_15765")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15751.name + "@" + _modDef15751.version;
  globalThis.URL = _mod15752.URL;
  globalThis.URLSearchParams = _mod15765.URLSearchParams;
}