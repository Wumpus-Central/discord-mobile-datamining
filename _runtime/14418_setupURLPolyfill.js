// _runtime/14418_setupURLPolyfill.js
import _modDef14420 from "metro/14420__.js";
import _mod14421 from "metro/14421__.js";
import _mod14434 from "metro/14434__.js";
import get_ActivityIndicator from "metro/14419__.js";

for (const key10016 in require("metro/14421__.js")) {
  arg5[key10016] = require("metro/14421__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14434__.js")) {
  arg5[key10020] = require("metro/14434__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14420.name + "@" + _modDef14420.version;
  globalThis.URL = _mod14421.URL;
  globalThis.URLSearchParams = _mod14434.URLSearchParams;
};
