// === Module 16196: setupURLPolyfill ===

// Module 16196 (setupURLPolyfill)
import _modDef16198 from "module_16198" /* 16198 */;
import _mod16199 from "module_16199" /* 16199 */;
import _mod16212 from "module_16212" /* 16212 */;
import get_ActivityIndicator from "module_16197" /* 16197 */;

const require = globalThis.__r;

for (const key10016 in require("module_16199")) {
  arg5[key10016] = require("module_16199")[key10016];
  continue;
}
for (const key10020 in require("module_16212")) {
  arg5[key10020] = require("module_16212")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16198.name + "@" + _modDef16198.version;
  globalThis.URL = _mod16199.URL;
  globalThis.URLSearchParams = _mod16212.URLSearchParams;
}