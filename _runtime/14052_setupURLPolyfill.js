// _runtime/14052_setupURLPolyfill.js
import _modDef14054 from "metro/14054__.js";
import _mod14055 from "metro/14055__.js";
import _mod14068 from "metro/14068__.js";
import get_ActivityIndicator from "metro/14053__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14055__.js")) {
  arg5[key10016] = require("metro/14055__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14068__.js")) {
  arg5[key10020] = require("metro/14068__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14054.name + "@" + _modDef14054.version;
  globalThis.URL = _mod14055.URL;
  globalThis.URLSearchParams = _mod14068.URLSearchParams;
};
