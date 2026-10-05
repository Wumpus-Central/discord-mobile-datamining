// _runtime/14129_setupURLPolyfill.js
import _modDef14131 from "metro/14131__.js";
import _mod14132 from "metro/14132__.js";
import _mod14145 from "metro/14145__.js";
import get_ActivityIndicator from "metro/14130__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14132__.js")) {
  arg5[key10016] = require("metro/14132__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14145__.js")) {
  arg5[key10020] = require("metro/14145__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14131.name + "@" + _modDef14131.version;
  globalThis.URL = _mod14132.URL;
  globalThis.URLSearchParams = _mod14145.URLSearchParams;
};
