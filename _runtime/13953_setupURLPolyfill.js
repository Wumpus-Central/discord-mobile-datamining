// _runtime/13953_setupURLPolyfill.js
import _modDef13955 from "metro/13955__.js";
import BlobModule from "13956_BlobModule.js";
import URLSearchParams from "13969_URLSearchParams.js";
import get_ActivityIndicator from "13954_get_ActivityIndicator.js";

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