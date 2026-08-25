// === Module 13834: setupURLPolyfill ===

// Module 13834 (setupURLPolyfill)
import _modDef13836 from "module_13836" /* 13836 */;
import BlobModule from "BlobModule" /* 13837 */;
import URLSearchParams from "URLSearchParams" /* 13850 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13835 */;

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13836.name + "@" + _modDef13836.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};