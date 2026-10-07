// === Module 14147: setupURLPolyfill ===

// Module 14147 (setupURLPolyfill)
import _modDef14149 from "module_14149" /* 14149 */;
import _mod14150 from "module_14150" /* 14150 */;
import _mod14163 from "module_14163" /* 14163 */;
import get_ActivityIndicator from "module_14148" /* 14148 */;

const require = globalThis.__r;

for (const key10016 in require("module_14150")) {
  arg5[key10016] = require("module_14150")[key10016];
  continue;
}
for (const key10020 in require("module_14163")) {
  arg5[key10020] = require("module_14163")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14149.name + "@" + _modDef14149.version;
  globalThis.URL = _mod14150.URL;
  globalThis.URLSearchParams = _mod14163.URLSearchParams;
};