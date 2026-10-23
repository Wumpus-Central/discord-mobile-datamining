// === Module 15567: setupURLPolyfill ===

// Module 15567 (setupURLPolyfill)
import _modDef15569 from "module_15569" /* 15569 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15583 from "module_15583" /* 15583 */;
import get_ActivityIndicator from "module_15568" /* 15568 */;

const require = globalThis.__r;

for (const key10016 in require("module_15570")) {
  arg5[key10016] = require("module_15570")[key10016];
  continue;
}
for (const key10020 in require("module_15583")) {
  arg5[key10020] = require("module_15583")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15569.name + "@" + _modDef15569.version;
  globalThis.URL = _mod15570.URL;
  globalThis.URLSearchParams = _mod15583.URLSearchParams;
};