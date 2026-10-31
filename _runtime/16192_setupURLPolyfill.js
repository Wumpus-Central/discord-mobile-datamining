// _runtime/16192_setupURLPolyfill.js
import _modDef16194 from "metro/16194__.js";
import _mod16195 from "metro/16195__.js";
import _mod16208 from "metro/16208__.js";
import get_ActivityIndicator from "metro/16193__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16195__.js")) {
  arg5[key10016] = require("metro/16195__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16208__.js")) {
  arg5[key10020] = require("metro/16208__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16194.name + "@" + _modDef16194.version;
  globalThis.URL = _mod16195.URL;
  globalThis.URLSearchParams = _mod16208.URLSearchParams;
}
