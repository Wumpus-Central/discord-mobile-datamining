// === Module 16692: setupURLPolyfill ===

// Module 16692 (setupURLPolyfill)
import _modDef16694 from "module_16694" /* 16694 */;
import _mod16695 from "module_16695" /* 16695 */;
import _mod16708 from "module_16708" /* 16708 */;
import get_ActivityIndicator from "module_16693" /* 16693 */;

const require = globalThis.__r;

for (const key10016 in require("module_16695")) {
  arg5[key10016] = require("module_16695")[key10016];
  continue;
}
for (const key10020 in require("module_16708")) {
  arg5[key10020] = require("module_16708")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16694.name + "@" + _modDef16694.version;
  globalThis.URL = _mod16695.URL;
  globalThis.URLSearchParams = _mod16708.URLSearchParams;
}