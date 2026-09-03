// === Module 14259: setupURLPolyfill ===

// Module 14259 (setupURLPolyfill)
import _modDef14261 from "module_14261" /* 14261 */;
import BlobModule from "BlobModule" /* 14262 */;
import URLSearchParams from "URLSearchParams" /* 14275 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14260 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14261.name + "@" + _modDef14261.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};