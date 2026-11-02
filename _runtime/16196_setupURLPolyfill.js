// _runtime/16196_setupURLPolyfill.js
import _modDef16198 from "metro/16198__.js";
import _mod16199 from "metro/16199__.js";
import _mod16212 from "metro/16212__.js";
import get_ActivityIndicator from "metro/16197__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16199__.js")) {
  arg5[key10016] = require("metro/16199__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16212__.js")) {
  arg5[key10020] = require("metro/16212__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16198.name + "@" + _modDef16198.version;
  globalThis.URL = _mod16199.URL;
  globalThis.URLSearchParams = _mod16212.URLSearchParams;
}
