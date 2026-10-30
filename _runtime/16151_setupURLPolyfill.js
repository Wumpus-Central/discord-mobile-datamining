// _runtime/16151_setupURLPolyfill.js
import _modDef16153 from "metro/16153__.js";
import _mod16154 from "metro/16154__.js";
import _mod16167 from "metro/16167__.js";
import get_ActivityIndicator from "metro/16152__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16154__.js")) {
  arg5[key10016] = require("metro/16154__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16167__.js")) {
  arg5[key10020] = require("metro/16167__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16153.name + "@" + _modDef16153.version;
  globalThis.URL = _mod16154.URL;
  globalThis.URLSearchParams = _mod16167.URLSearchParams;
}
