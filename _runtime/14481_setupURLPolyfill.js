// _runtime/14481_setupURLPolyfill.js
import _modDef14483 from "metro/14483__.js";
import _mod14484 from "metro/14484__.js";
import _mod14497 from "metro/14497__.js";
import get_ActivityIndicator from "metro/14482__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14484__.js")) {
  arg5[key10016] = require("metro/14484__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14497__.js")) {
  arg5[key10020] = require("metro/14497__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14483.name + "@" + _modDef14483.version;
  globalThis.URL = _mod14484.URL;
  globalThis.URLSearchParams = _mod14497.URLSearchParams;
};
