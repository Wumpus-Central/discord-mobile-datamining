// _runtime/15420_setupURLPolyfill.js
import _modDef15422 from "metro/15422__.js";
import _mod15423 from "metro/15423__.js";
import _mod15436 from "metro/15436__.js";
import get_ActivityIndicator from "metro/15421__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15423__.js")) {
  arg5[key10016] = require("metro/15423__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15436__.js")) {
  arg5[key10020] = require("metro/15436__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15422.name + "@" + _modDef15422.version;
  globalThis.URL = _mod15423.URL;
  globalThis.URLSearchParams = _mod15436.URLSearchParams;
};
