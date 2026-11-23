// _runtime/15606_setupURLPolyfill.js
import _modDef15608 from "metro/15608__.js";
import _mod15609 from "metro/15609__.js";
import _mod15622 from "metro/15622__.js";
import get_ActivityIndicator from "metro/15607__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15609__.js")) {
  arg5[key10016] = require("metro/15609__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15622__.js")) {
  arg5[key10020] = require("metro/15622__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15608.name + "@" + _modDef15608.version;
  globalThis.URL = _mod15609.URL;
  globalThis.URLSearchParams = _mod15622.URLSearchParams;
}
