// _runtime/13901_setupURLPolyfill.js
import _modDef13903 from "metro/13903__.js";
import _mod13904 from "metro/13904__.js";
import _mod13917 from "metro/13917__.js";
import get_ActivityIndicator from "metro/13902__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/13904__.js")) {
  arg5[key10016] = require("metro/13904__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/13917__.js")) {
  arg5[key10020] = require("metro/13917__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13903.name + "@" + _modDef13903.version;
  globalThis.URL = _mod13904.URL;
  globalThis.URLSearchParams = _mod13917.URLSearchParams;
};
