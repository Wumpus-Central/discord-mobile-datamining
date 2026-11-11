// === Module 16697: setupURLPolyfill ===

// Module 16697 (setupURLPolyfill)
import _modDef16699 from "module_16699" /* 16699 */;
import _mod16700 from "module_16700" /* 16700 */;
import _mod16713 from "module_16713" /* 16713 */;
import get_ActivityIndicator from "module_16698" /* 16698 */;

const require = globalThis.__r;

for (const key10016 in require("module_16700")) {
  arg5[key10016] = require("module_16700")[key10016];
  continue;
}
for (const key10020 in require("module_16713")) {
  arg5[key10020] = require("module_16713")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16699.name + "@" + _modDef16699.version;
  globalThis.URL = _mod16700.URL;
  globalThis.URLSearchParams = _mod16713.URLSearchParams;
}