// _runtime/16454_setupURLPolyfill.js
import _modDef16456 from "metro/16456__.js";
import _mod16457 from "metro/16457__.js";
import _mod16470 from "metro/16470__.js";
import get_ActivityIndicator from "metro/16455__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16457__.js")) {
  arg5[key10016] = require("metro/16457__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16470__.js")) {
  arg5[key10020] = require("metro/16470__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16456.name + "@" + _modDef16456.version;
  globalThis.URL = _mod16457.URL;
  globalThis.URLSearchParams = _mod16470.URLSearchParams;
}
