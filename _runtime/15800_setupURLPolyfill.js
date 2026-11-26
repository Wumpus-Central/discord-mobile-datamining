// _runtime/15800_setupURLPolyfill.js
import _modDef15802 from "metro/15802__.js";
import _mod15803 from "metro/15803__.js";
import _mod15816 from "metro/15816__.js";
import get_ActivityIndicator from "metro/15801__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15803__.js")) {
  arg5[key10016] = require("metro/15803__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15816__.js")) {
  arg5[key10020] = require("metro/15816__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15802.name + "@" + _modDef15802.version;
  globalThis.URL = _mod15803.URL;
  globalThis.URLSearchParams = _mod15816.URLSearchParams;
}
