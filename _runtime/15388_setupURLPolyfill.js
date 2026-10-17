// === Module 15388: setupURLPolyfill ===

// Module 15388 (setupURLPolyfill)
import _modDef15390 from "module_15390" /* 15390 */;
import _mod15391 from "module_15391" /* 15391 */;
import _mod15404 from "module_15404" /* 15404 */;
import get_ActivityIndicator from "module_15389" /* 15389 */;

const require = globalThis.__r;

for (const key10016 in require("module_15391")) {
  arg5[key10016] = require("module_15391")[key10016];
  continue;
}
for (const key10020 in require("module_15404")) {
  arg5[key10020] = require("module_15404")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15390.name + "@" + _modDef15390.version;
  globalThis.URL = _mod15391.URL;
  globalThis.URLSearchParams = _mod15404.URLSearchParams;
};