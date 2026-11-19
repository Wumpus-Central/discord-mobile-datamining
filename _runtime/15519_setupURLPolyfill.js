// === Module 15519: setupURLPolyfill ===

// Module 15519 (setupURLPolyfill)
import _modDef15521 from "module_15521" /* 15521 */;
import _mod15522 from "module_15522" /* 15522 */;
import _mod15535 from "module_15535" /* 15535 */;
import get_ActivityIndicator from "module_15520" /* 15520 */;

const require = globalThis.__r;

for (const key10016 in require("module_15522")) {
  arg5[key10016] = require("module_15522")[key10016];
  continue;
}
for (const key10020 in require("module_15535")) {
  arg5[key10020] = require("module_15535")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15521.name + "@" + _modDef15521.version;
  globalThis.URL = _mod15522.URL;
  globalThis.URLSearchParams = _mod15535.URLSearchParams;
}