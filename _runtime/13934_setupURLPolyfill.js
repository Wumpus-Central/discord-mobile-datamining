// === Module 13934: setupURLPolyfill ===

// Module 13934 (setupURLPolyfill)
import _modDef13936 from "module_13936" /* 13936 */;
import BlobModule from "BlobModule" /* 13937 */;
import URLSearchParams from "URLSearchParams" /* 13950 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13935 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13936.name + "@" + _modDef13936.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};