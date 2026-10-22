// === Module 15554: setupURLPolyfill ===

// Module 15554 (setupURLPolyfill)
import _modDef15556 from "module_15556" /* 15556 */;
import _mod15557 from "module_15557" /* 15557 */;
import _mod15570 from "module_15570" /* 15570 */;
import get_ActivityIndicator from "module_15555" /* 15555 */;

const require = globalThis.__r;

for (const key10016 in require("module_15557")) {
  arg5[key10016] = require("module_15557")[key10016];
  continue;
}
for (const key10020 in require("module_15570")) {
  arg5[key10020] = require("module_15570")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15556.name + "@" + _modDef15556.version;
  globalThis.URL = _mod15557.URL;
  globalThis.URLSearchParams = _mod15570.URLSearchParams;
};