// === Module 16339: setupURLPolyfill ===

// Module 16339 (setupURLPolyfill)
import _modDef16341 from "module_16341" /* 16341 */;
import _mod16342 from "module_16342" /* 16342 */;
import _mod16355 from "module_16355" /* 16355 */;
import get_ActivityIndicator from "module_16340" /* 16340 */;

const require = globalThis.__r;

for (const key10016 in require("module_16342")) {
  arg5[key10016] = require("module_16342")[key10016];
  continue;
}
for (const key10020 in require("module_16355")) {
  arg5[key10020] = require("module_16355")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16341.name + "@" + _modDef16341.version;
  globalThis.URL = _mod16342.URL;
  globalThis.URLSearchParams = _mod16355.URLSearchParams;
}