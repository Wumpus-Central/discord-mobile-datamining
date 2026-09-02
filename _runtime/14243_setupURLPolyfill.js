// === Module 14243: setupURLPolyfill ===

// Module 14243 (setupURLPolyfill)
import _modDef14245 from "module_14245" /* 14245 */;
import BlobModule from "BlobModule" /* 14246 */;
import URLSearchParams from "URLSearchParams" /* 14259 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14244 */;

for (const key10016 in require("BlobModule")) {
  let tmp3 = key10016;
  arg5[key10016] = require("BlobModule")[key10016];
  continue;
}
for (const key10020 in require("URLSearchParams")) {
  let tmp4 = key10020;
  arg5[key10020] = require("URLSearchParams")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14245.name + "@" + _modDef14245.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};