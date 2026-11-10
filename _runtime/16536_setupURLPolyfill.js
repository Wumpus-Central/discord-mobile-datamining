// _runtime/16536_setupURLPolyfill.js
import _modDef16538 from "metro/16538__.js";
import _mod16539 from "metro/16539__.js";
import _mod16552 from "metro/16552__.js";
import get_ActivityIndicator from "metro/16537__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16539__.js")) {
  arg5[key10016] = require("metro/16539__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16552__.js")) {
  arg5[key10020] = require("metro/16552__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16538.name + "@" + _modDef16538.version;
  globalThis.URL = _mod16539.URL;
  globalThis.URLSearchParams = _mod16552.URLSearchParams;
}
