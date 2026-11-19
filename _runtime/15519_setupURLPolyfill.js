// _runtime/15519_setupURLPolyfill.js
import _modDef15521 from "metro/15521__.js";
import _mod15522 from "metro/15522__.js";
import _mod15535 from "metro/15535__.js";
import get_ActivityIndicator from "metro/15520__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15522__.js")) {
  arg5[key10016] = require("metro/15522__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15535__.js")) {
  arg5[key10020] = require("metro/15535__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15521.name + "@" + _modDef15521.version;
  globalThis.URL = _mod15522.URL;
  globalThis.URLSearchParams = _mod15535.URLSearchParams;
}
