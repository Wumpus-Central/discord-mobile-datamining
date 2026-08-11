// _runtime/13648_setupURLPolyfill.js
import get_ActivityIndicator from "get ActivityIndicator";
import { BlobModule } from "13651_BlobModule.js";
import { URLSearchParams } from "13664_URLSearchParams.js";
import { 13650__ } from "metro/13650__.js";

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + 13650__.name + "@" + 13650__.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};