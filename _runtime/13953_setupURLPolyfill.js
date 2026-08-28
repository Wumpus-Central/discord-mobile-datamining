// === Module 13953: setupURLPolyfill ===

// Module 13953 (setupURLPolyfill)
import _modDef13955 from "module_13955" /* 13955 */;
import BlobModule from "BlobModule" /* 13956 */;
import URLSearchParams from "URLSearchParams" /* 13969 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13954 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13955.name + "@" + _modDef13955.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};