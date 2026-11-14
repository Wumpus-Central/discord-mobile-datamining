// === Module 16815: setupURLPolyfill ===

// Module 16815 (setupURLPolyfill)
import _modDef16817 from "module_16817" /* 16817 */;
import _mod16818 from "module_16818" /* 16818 */;
import _mod16831 from "module_16831" /* 16831 */;
import get_ActivityIndicator from "module_16816" /* 16816 */;

const require = globalThis.__r;

for (const key10016 in require("module_16818")) {
  arg5[key10016] = require("module_16818")[key10016];
  continue;
}
for (const key10020 in require("module_16831")) {
  arg5[key10020] = require("module_16831")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16817.name + "@" + _modDef16817.version;
  globalThis.URL = _mod16818.URL;
  globalThis.URLSearchParams = _mod16831.URLSearchParams;
}