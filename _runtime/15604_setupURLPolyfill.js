// === Module 15604: setupURLPolyfill ===

// Module 15604 (setupURLPolyfill)
import _modDef15606 from "module_15606" /* 15606 */;
import _mod15607 from "module_15607" /* 15607 */;
import _mod15620 from "module_15620" /* 15620 */;
import get_ActivityIndicator from "module_15605" /* 15605 */;

const require = globalThis.__r;

for (const key10016 in require("module_15607")) {
  arg5[key10016] = require("module_15607")[key10016];
  continue;
}
for (const key10020 in require("module_15620")) {
  arg5[key10020] = require("module_15620")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15606.name + "@" + _modDef15606.version;
  globalThis.URL = _mod15607.URL;
  globalThis.URLSearchParams = _mod15620.URLSearchParams;
}