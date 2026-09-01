// === Module 14020: setupURLPolyfill ===

// Module 14020 (setupURLPolyfill)
import _modDef14022 from "module_14022" /* 14022 */;
import BlobModule from "BlobModule" /* 14023 */;
import URLSearchParams from "URLSearchParams" /* 14036 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14021 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14022.name + "@" + _modDef14022.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};