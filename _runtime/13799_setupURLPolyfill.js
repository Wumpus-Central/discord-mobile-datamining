// === Module 13799: setupURLPolyfill ===

// Module 13799 (setupURLPolyfill)
import _modDef13801 from "module_13801" /* 13801 */;
import BlobModule from "BlobModule" /* 13802 */;
import URLSearchParams from "URLSearchParams" /* 13815 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13800 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13801.name + "@" + _modDef13801.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};