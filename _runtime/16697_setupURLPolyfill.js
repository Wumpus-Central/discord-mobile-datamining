// _runtime/16697_setupURLPolyfill.js
import _modDef16699 from "metro/16699__.js";
import _mod16700 from "metro/16700__.js";
import _mod16713 from "metro/16713__.js";
import get_ActivityIndicator from "metro/16698__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16700__.js")) {
  arg5[key10016] = require("metro/16700__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16713__.js")) {
  arg5[key10020] = require("metro/16713__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16699.name + "@" + _modDef16699.version;
  globalThis.URL = _mod16700.URL;
  globalThis.URLSearchParams = _mod16713.URLSearchParams;
}
