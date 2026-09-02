// _runtime/14243_setupURLPolyfill.js
import _modDef14245 from "metro/14245__.js";
import BlobModule from "14246_BlobModule.js";
import URLSearchParams from "14259_URLSearchParams.js";
import get_ActivityIndicator from "14244_get_ActivityIndicator.js";

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
