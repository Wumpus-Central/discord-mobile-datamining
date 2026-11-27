// === Module 15807: setupURLPolyfill ===

// Module 15807 (setupURLPolyfill)
import _modDef15809 from "module_15809" /* 15809 */;
import _mod15810 from "module_15810" /* 15810 */;
import _mod15823 from "module_15823" /* 15823 */;
import get_ActivityIndicator from "module_15808" /* 15808 */;

const require = globalThis.__r;

for (const key10016 in require("module_15810")) {
  arg5[key10016] = require("module_15810")[key10016];
  continue;
}
for (const key10020 in require("module_15823")) {
  arg5[key10020] = require("module_15823")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15809.name + "@" + _modDef15809.version;
  globalThis.URL = _mod15810.URL;
  globalThis.URLSearchParams = _mod15823.URLSearchParams;
}