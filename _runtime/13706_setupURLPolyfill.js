// _runtime/13706_setupURLPolyfill.js
import get_ActivityIndicator from "get ActivityIndicator";
import { BlobModule } from "13709_BlobModule.js";
import { URLSearchParams } from "13722_URLSearchParams.js";
import { 13708__ } from "metro/13708__.js";

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + 13708__.name + "@" + 13708__.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};