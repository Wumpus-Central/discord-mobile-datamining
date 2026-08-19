// === Module 13741: setupURLPolyfill ===

// Module 13741 (setupURLPolyfill)
import _modDef13743 from "module_13743" /* 13743 */;
import BlobModule from "BlobModule" /* 13744 */;
import URLSearchParams from "URLSearchParams" /* 13757 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13742 */;

for (const key10016 in require("BlobModule")) {
  arg5[key10016] = require("BlobModule")[key10016];
  continue;
}
for (const key10020 in require("URLSearchParams")) {
  arg5[key10020] = require("URLSearchParams")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13743.name + "@" + _modDef13743.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};