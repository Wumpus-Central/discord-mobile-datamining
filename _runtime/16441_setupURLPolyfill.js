// === Module 16441: setupURLPolyfill ===

// Module 16441 (setupURLPolyfill)
import _modDef16443 from "module_16443" /* 16443 */;
import _mod16444 from "module_16444" /* 16444 */;
import _mod16457 from "module_16457" /* 16457 */;
import get_ActivityIndicator from "module_16442" /* 16442 */;

const require = globalThis.__r;

for (const key10016 in require("module_16444")) {
  arg5[key10016] = require("module_16444")[key10016];
  continue;
}
for (const key10020 in require("module_16457")) {
  arg5[key10020] = require("module_16457")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16443.name + "@" + _modDef16443.version;
  globalThis.URL = _mod16444.URL;
  globalThis.URLSearchParams = _mod16457.URLSearchParams;
}