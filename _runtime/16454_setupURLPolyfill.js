// === Module 16454: setupURLPolyfill ===

// Module 16454 (setupURLPolyfill)
import _modDef16456 from "module_16456" /* 16456 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16470 from "module_16470" /* 16470 */;
import get_ActivityIndicator from "module_16455" /* 16455 */;

const require = globalThis.__r;

for (const key10016 in require("module_16457")) {
  arg5[key10016] = require("module_16457")[key10016];
  continue;
}
for (const key10020 in require("module_16470")) {
  arg5[key10020] = require("module_16470")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16456.name + "@" + _modDef16456.version;
  globalThis.URL = _mod16457.URL;
  globalThis.URLSearchParams = _mod16470.URLSearchParams;
}