// _runtime/16509_setupURLPolyfill.js
import _modDef16511 from "metro/16511__.js";
import _mod16512 from "metro/16512__.js";
import _mod16525 from "metro/16525__.js";
import get_ActivityIndicator from "metro/16510__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16512__.js")) {
  arg5[key10016] = require("metro/16512__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16525__.js")) {
  arg5[key10020] = require("metro/16525__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16511.name + "@" + _modDef16511.version;
  globalThis.URL = _mod16512.URL;
  globalThis.URLSearchParams = _mod16525.URLSearchParams;
}
