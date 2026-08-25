// _runtime/13834_setupURLPolyfill.js
import _modDef13836 from "metro/13836__.js";
import BlobModule from "13837_BlobModule.js";
import URLSearchParams from "13850_URLSearchParams.js";
import get_ActivityIndicator from "13835_get_ActivityIndicator.js";

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