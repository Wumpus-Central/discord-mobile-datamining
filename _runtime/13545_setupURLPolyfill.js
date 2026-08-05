// _runtime/13545_setupURLPolyfill.js
import get_ActivityIndicator from "get ActivityIndicator";

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
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + require("metro/13547__.js").name + "@" + require("metro/13547__.js").version;
  globalThis.URL = require("13548_BlobModule.js") /* BlobModule */.URL;
  globalThis.URLSearchParams = require("13561_URLSearchParams.js") /* URLSearchParams */.URLSearchParams;
};