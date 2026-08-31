// _runtime/13987_setupURLPolyfill.js
import _modDef13989 from "metro/13989__.js";
import BlobModule from "13990_BlobModule.js";
import URLSearchParams from "14003_URLSearchParams.js";
import get_ActivityIndicator from "13988_get_ActivityIndicator.js";

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13989.name + "@" + _modDef13989.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};