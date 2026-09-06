// === Module 14365: setupURLPolyfill ===

// Module 14365 (setupURLPolyfill)
import _modDef14367 from "module_14367" /* 14367 */;
import BlobModule from "BlobModule" /* 14368 */;
import URLSearchParams from "URLSearchParams" /* 14381 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14366 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14367.name + "@" + _modDef14367.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};