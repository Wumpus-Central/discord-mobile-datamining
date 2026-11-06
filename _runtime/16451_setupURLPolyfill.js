// === Module 16451: setupURLPolyfill ===

// Module 16451 (setupURLPolyfill)
import _modDef16453 from "module_16453" /* 16453 */;
import _mod16454 from "module_16454" /* 16454 */;
import _mod16467 from "module_16467" /* 16467 */;
import get_ActivityIndicator from "module_16452" /* 16452 */;

const require = globalThis.__r;

for (const key10016 in require("module_16454")) {
  arg5[key10016] = require("module_16454")[key10016];
  continue;
}
for (const key10020 in require("module_16467")) {
  arg5[key10020] = require("module_16467")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16453.name + "@" + _modDef16453.version;
  globalThis.URL = _mod16454.URL;
  globalThis.URLSearchParams = _mod16467.URLSearchParams;
}