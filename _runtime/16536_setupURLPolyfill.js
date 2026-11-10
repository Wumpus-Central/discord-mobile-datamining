// === Module 16536: setupURLPolyfill ===

// Module 16536 (setupURLPolyfill)
import _modDef16538 from "module_16538" /* 16538 */;
import _mod16539 from "module_16539" /* 16539 */;
import _mod16552 from "module_16552" /* 16552 */;
import get_ActivityIndicator from "module_16537" /* 16537 */;

const require = globalThis.__r;

for (const key10016 in require("module_16539")) {
  arg5[key10016] = require("module_16539")[key10016];
  continue;
}
for (const key10020 in require("module_16552")) {
  arg5[key10020] = require("module_16552")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16538.name + "@" + _modDef16538.version;
  globalThis.URL = _mod16539.URL;
  globalThis.URLSearchParams = _mod16552.URLSearchParams;
}