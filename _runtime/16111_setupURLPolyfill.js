// _runtime/16111_setupURLPolyfill.js
import _modDef16113 from "metro/16113__.js";
import _mod16114 from "metro/16114__.js";
import _mod16127 from "metro/16127__.js";
import get_ActivityIndicator from "metro/16112__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16114__.js")) {
  arg5[key10016] = require("metro/16114__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16127__.js")) {
  arg5[key10020] = require("metro/16127__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16113.name + "@" + _modDef16113.version;
  globalThis.URL = _mod16114.URL;
  globalThis.URLSearchParams = _mod16127.URLSearchParams;
}
