// _runtime/15319_setupURLPolyfill.js
import _modDef15321 from "metro/15321__.js";
import _mod15322 from "metro/15322__.js";
import _mod15335 from "metro/15335__.js";
import get_ActivityIndicator from "metro/15320__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15322__.js")) {
  arg5[key10016] = require("metro/15322__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15335__.js")) {
  arg5[key10020] = require("metro/15335__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15321.name + "@" + _modDef15321.version;
  globalThis.URL = _mod15322.URL;
  globalThis.URLSearchParams = _mod15335.URLSearchParams;
};
