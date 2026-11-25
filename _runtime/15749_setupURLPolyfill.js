// _runtime/15749_setupURLPolyfill.js
import _modDef15751 from "metro/15751__.js";
import _mod15752 from "metro/15752__.js";
import _mod15765 from "metro/15765__.js";
import get_ActivityIndicator from "metro/15750__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15752__.js")) {
  arg5[key10016] = require("metro/15752__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15765__.js")) {
  arg5[key10020] = require("metro/15765__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15751.name + "@" + _modDef15751.version;
  globalThis.URL = _mod15752.URL;
  globalThis.URLSearchParams = _mod15765.URLSearchParams;
}
