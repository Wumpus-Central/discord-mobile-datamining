// _runtime/16451_setupURLPolyfill.js
import _modDef16453 from "metro/16453__.js";
import _mod16454 from "metro/16454__.js";
import _mod16467 from "metro/16467__.js";
import get_ActivityIndicator from "metro/16452__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16454__.js")) {
  arg5[key10016] = require("metro/16454__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16467__.js")) {
  arg5[key10020] = require("metro/16467__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16453.name + "@" + _modDef16453.version;
  globalThis.URL = _mod16454.URL;
  globalThis.URLSearchParams = _mod16467.URLSearchParams;
}
