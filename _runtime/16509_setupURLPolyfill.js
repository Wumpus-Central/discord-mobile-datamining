// === Module 16509: setupURLPolyfill ===

// Module 16509 (setupURLPolyfill)
import _modDef16511 from "module_16511" /* 16511 */;
import _mod16512 from "module_16512" /* 16512 */;
import _mod16525 from "module_16525" /* 16525 */;
import get_ActivityIndicator from "module_16510" /* 16510 */;

const require = globalThis.__r;

for (const key10016 in require("module_16512")) {
  arg5[key10016] = require("module_16512")[key10016];
  continue;
}
for (const key10020 in require("module_16525")) {
  arg5[key10020] = require("module_16525")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16511.name + "@" + _modDef16511.version;
  globalThis.URL = _mod16512.URL;
  globalThis.URLSearchParams = _mod16525.URLSearchParams;
}