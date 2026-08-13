// _runtime/13697_setupURLPolyfill.js
import get_ActivityIndicator from "get ActivityIndicator";
import { BlobModule } from "13700_BlobModule.js";
import { URLSearchParams } from "13713_URLSearchParams.js";
import { 13699__ } from "metro/13699__.js";

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + 13699__.name + "@" + 13699__.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};