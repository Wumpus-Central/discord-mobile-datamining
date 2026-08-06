// _runtime/13554_setupURLPolyfill.js
import get_ActivityIndicator from "get ActivityIndicator";
import { BlobModule } from "13557_BlobModule.js";
import { URLSearchParams } from "13570_URLSearchParams.js";
import { 13556__ } from "metro/13556__.js";

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + 13556__.name + "@" + 13556__.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};