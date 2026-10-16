// === Module 15319: setupURLPolyfill ===

// Module 15319 (setupURLPolyfill)
import _modDef15321 from "module_15321" /* 15321 */;
import _mod15322 from "module_15322" /* 15322 */;
import _mod15335 from "module_15335" /* 15335 */;
import get_ActivityIndicator from "module_15320" /* 15320 */;

const require = globalThis.__r;

for (const key10016 in require("module_15322")) {
  arg5[key10016] = require("module_15322")[key10016];
  continue;
}
for (const key10020 in require("module_15335")) {
  arg5[key10020] = require("module_15335")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15321.name + "@" + _modDef15321.version;
  globalThis.URL = _mod15322.URL;
  globalThis.URLSearchParams = _mod15335.URLSearchParams;
};