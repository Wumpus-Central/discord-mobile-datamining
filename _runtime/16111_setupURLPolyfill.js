// === Module 16111: setupURLPolyfill ===

// Module 16111 (setupURLPolyfill)
import _modDef16113 from "module_16113" /* 16113 */;
import _mod16114 from "module_16114" /* 16114 */;
import _mod16127 from "module_16127" /* 16127 */;
import get_ActivityIndicator from "module_16112" /* 16112 */;

const require = globalThis.__r;

for (const key10016 in require("module_16114")) {
  arg5[key10016] = require("module_16114")[key10016];
  continue;
}
for (const key10020 in require("module_16127")) {
  arg5[key10020] = require("module_16127")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16113.name + "@" + _modDef16113.version;
  globalThis.URL = _mod16114.URL;
  globalThis.URLSearchParams = _mod16127.URLSearchParams;
}