// === Module 16499: setupURLPolyfill ===

// Module 16499 (setupURLPolyfill)
import _modDef16501 from "module_16501" /* 16501 */;
import _mod16502 from "module_16502" /* 16502 */;
import _mod16515 from "module_16515" /* 16515 */;
import get_ActivityIndicator from "module_16500" /* 16500 */;

const require = globalThis.__r;

for (const key10016 in require("module_16502")) {
  arg5[key10016] = require("module_16502")[key10016];
  continue;
}
for (const key10020 in require("module_16515")) {
  arg5[key10020] = require("module_16515")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16501.name + "@" + _modDef16501.version;
  globalThis.URL = _mod16502.URL;
  globalThis.URLSearchParams = _mod16515.URLSearchParams;
}