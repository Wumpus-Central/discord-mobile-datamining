// _runtime/14940_setupURLPolyfill.js
import _modDef14942 from "metro/14942__.js";
import _mod14943 from "metro/14943__.js";
import _mod14956 from "metro/14956__.js";
import get_ActivityIndicator from "metro/14941__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14943__.js")) {
  arg5[key10016] = require("metro/14943__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14956__.js")) {
  arg5[key10020] = require("metro/14956__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14942.name + "@" + _modDef14942.version;
  globalThis.URL = _mod14943.URL;
  globalThis.URLSearchParams = _mod14956.URLSearchParams;
};
