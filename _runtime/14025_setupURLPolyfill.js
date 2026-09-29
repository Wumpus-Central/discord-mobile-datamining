// _runtime/14025_setupURLPolyfill.js
import _modDef14027 from "metro/14027__.js";
import _mod14028 from "metro/14028__.js";
import _mod14041 from "metro/14041__.js";
import get_ActivityIndicator from "metro/14026__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14028__.js")) {
  arg5[key10016] = require("metro/14028__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14041__.js")) {
  arg5[key10020] = require("metro/14041__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14027.name + "@" + _modDef14027.version;
  globalThis.URL = _mod14028.URL;
  globalThis.URLSearchParams = _mod14041.URLSearchParams;
};
