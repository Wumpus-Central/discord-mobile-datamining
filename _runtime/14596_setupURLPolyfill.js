// === Module 14596: setupURLPolyfill ===

// Module 14596 (setupURLPolyfill)
import _modDef14598 from "module_14598" /* 14598 */;
import _mod14599 from "module_14599" /* 14599 */;
import _mod14612 from "module_14612" /* 14612 */;
import get_ActivityIndicator from "module_14597" /* 14597 */;

const require = globalThis.__r;

for (const key10016 in require("module_14599")) {
  arg5[key10016] = require("module_14599")[key10016];
  continue;
}
for (const key10020 in require("module_14612")) {
  arg5[key10020] = require("module_14612")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14598.name + "@" + _modDef14598.version;
  globalThis.URL = _mod14599.URL;
  globalThis.URLSearchParams = _mod14612.URLSearchParams;
};