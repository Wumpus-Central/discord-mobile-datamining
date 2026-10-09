// === Module 14542: setupURLPolyfill ===

// Module 14542 (setupURLPolyfill)
import _modDef14544 from "module_14544" /* 14544 */;
import _mod14545 from "module_14545" /* 14545 */;
import _mod14558 from "module_14558" /* 14558 */;
import get_ActivityIndicator from "module_14543" /* 14543 */;

const require = globalThis.__r;

for (const key10016 in require("module_14545")) {
  arg5[key10016] = require("module_14545")[key10016];
  continue;
}
for (const key10020 in require("module_14558")) {
  arg5[key10020] = require("module_14558")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14544.name + "@" + _modDef14544.version;
  globalThis.URL = _mod14545.URL;
  globalThis.URLSearchParams = _mod14558.URLSearchParams;
};