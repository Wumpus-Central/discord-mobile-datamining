// _runtime/14368_setupURLPolyfill.js
import _modDef14370 from "metro/14370__.js";
import _mod14371 from "metro/14371__.js";
import _mod14384 from "metro/14384__.js";
import get_ActivityIndicator from "metro/14369__.js";

for (const key10016 in require("metro/14371__.js")) {
  arg5[key10016] = require("metro/14371__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14384__.js")) {
  arg5[key10020] = require("metro/14384__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14370.name + "@" + _modDef14370.version;
  globalThis.URL = _mod14371.URL;
  globalThis.URLSearchParams = _mod14384.URLSearchParams;
};
