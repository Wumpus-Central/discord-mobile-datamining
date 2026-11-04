// === Module 16428: setupURLPolyfill ===

// Module 16428 (setupURLPolyfill)
import _modDef16430 from "module_16430" /* 16430 */;
import _mod16431 from "module_16431" /* 16431 */;
import _mod16444 from "module_16444" /* 16444 */;
import get_ActivityIndicator from "module_16429" /* 16429 */;

const require = globalThis.__r;

for (const key10016 in require("module_16431")) {
  arg5[key10016] = require("module_16431")[key10016];
  continue;
}
for (const key10020 in require("module_16444")) {
  arg5[key10020] = require("module_16444")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16430.name + "@" + _modDef16430.version;
  globalThis.URL = _mod16431.URL;
  globalThis.URLSearchParams = _mod16444.URLSearchParams;
}