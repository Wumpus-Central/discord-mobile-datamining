// === Module 16151: setupURLPolyfill ===

// Module 16151 (setupURLPolyfill)
import _modDef16153 from "module_16153" /* 16153 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16167 from "module_16167" /* 16167 */;
import get_ActivityIndicator from "module_16152" /* 16152 */;

const require = globalThis.__r;

for (const key10016 in require("module_16154")) {
  arg5[key10016] = require("module_16154")[key10016];
  continue;
}
for (const key10020 in require("module_16167")) {
  arg5[key10020] = require("module_16167")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16153.name + "@" + _modDef16153.version;
  globalThis.URL = _mod16154.URL;
  globalThis.URLSearchParams = _mod16167.URLSearchParams;
}