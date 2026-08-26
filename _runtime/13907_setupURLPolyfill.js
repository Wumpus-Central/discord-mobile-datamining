// === Module 13907: setupURLPolyfill ===

// Module 13907 (setupURLPolyfill)
import _modDef13909 from "module_13909" /* 13909 */;
import BlobModule from "BlobModule" /* 13910 */;
import URLSearchParams from "URLSearchParams" /* 13923 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13908 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13909.name + "@" + _modDef13909.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};