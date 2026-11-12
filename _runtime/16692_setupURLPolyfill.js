// _runtime/16692_setupURLPolyfill.js
import _modDef16694 from "metro/16694__.js";
import _mod16695 from "metro/16695__.js";
import _mod16708 from "metro/16708__.js";
import get_ActivityIndicator from "metro/16693__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16695__.js")) {
  arg5[key10016] = require("metro/16695__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16708__.js")) {
  arg5[key10020] = require("metro/16708__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16694.name + "@" + _modDef16694.version;
  globalThis.URL = _mod16695.URL;
  globalThis.URLSearchParams = _mod16708.URLSearchParams;
}
