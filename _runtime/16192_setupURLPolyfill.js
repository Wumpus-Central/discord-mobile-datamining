// === Module 16192: setupURLPolyfill ===

// Module 16192 (setupURLPolyfill)
import _modDef16194 from "module_16194" /* 16194 */;
import _mod16195 from "module_16195" /* 16195 */;
import _mod16208 from "module_16208" /* 16208 */;
import get_ActivityIndicator from "module_16193" /* 16193 */;

const require = globalThis.__r;

for (const key10016 in require("module_16195")) {
  arg5[key10016] = require("module_16195")[key10016];
  continue;
}
for (const key10020 in require("module_16208")) {
  arg5[key10020] = require("module_16208")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16194.name + "@" + _modDef16194.version;
  globalThis.URL = _mod16195.URL;
  globalThis.URLSearchParams = _mod16208.URLSearchParams;
}