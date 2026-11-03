// _runtime/16339_setupURLPolyfill.js
import _modDef16341 from "metro/16341__.js";
import _mod16342 from "metro/16342__.js";
import _mod16355 from "metro/16355__.js";
import get_ActivityIndicator from "metro/16340__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16342__.js")) {
  arg5[key10016] = require("metro/16342__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16355__.js")) {
  arg5[key10020] = require("metro/16355__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16341.name + "@" + _modDef16341.version;
  globalThis.URL = _mod16342.URL;
  globalThis.URLSearchParams = _mod16355.URLSearchParams;
}
