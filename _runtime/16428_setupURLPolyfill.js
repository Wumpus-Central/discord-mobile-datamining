// _runtime/16428_setupURLPolyfill.js
import _modDef16430 from "metro/16430__.js";
import _mod16431 from "metro/16431__.js";
import _mod16444 from "metro/16444__.js";
import get_ActivityIndicator from "metro/16429__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16431__.js")) {
  arg5[key10016] = require("metro/16431__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16444__.js")) {
  arg5[key10020] = require("metro/16444__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16430.name + "@" + _modDef16430.version;
  globalThis.URL = _mod16431.URL;
  globalThis.URLSearchParams = _mod16444.URLSearchParams;
}
