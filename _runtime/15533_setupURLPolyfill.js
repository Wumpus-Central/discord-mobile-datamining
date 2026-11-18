// === Module 15533: setupURLPolyfill ===

// Module 15533 (setupURLPolyfill)
import _modDef15535 from "module_15535" /* 15535 */;
import _mod15536 from "module_15536" /* 15536 */;
import _mod15549 from "module_15549" /* 15549 */;
import get_ActivityIndicator from "module_15534" /* 15534 */;

const require = globalThis.__r;

for (const key10016 in require("module_15536")) {
  arg5[key10016] = require("module_15536")[key10016];
  continue;
}
for (const key10020 in require("module_15549")) {
  arg5[key10020] = require("module_15549")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15535.name + "@" + _modDef15535.version;
  globalThis.URL = _mod15536.URL;
  globalThis.URLSearchParams = _mod15549.URLSearchParams;
}