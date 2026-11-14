// _runtime/16815_setupURLPolyfill.js
import _modDef16817 from "metro/16817__.js";
import _mod16818 from "metro/16818__.js";
import _mod16831 from "metro/16831__.js";
import get_ActivityIndicator from "metro/16816__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16818__.js")) {
  arg5[key10016] = require("metro/16818__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16831__.js")) {
  arg5[key10020] = require("metro/16831__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16817.name + "@" + _modDef16817.version;
  globalThis.URL = _mod16818.URL;
  globalThis.URLSearchParams = _mod16831.URLSearchParams;
}
