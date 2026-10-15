// _runtime/15274_setupURLPolyfill.js
import _modDef15276 from "metro/15276__.js";
import _mod15277 from "metro/15277__.js";
import _mod15290 from "metro/15290__.js";
import get_ActivityIndicator from "metro/15275__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15277__.js")) {
  arg5[key10016] = require("metro/15277__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15290__.js")) {
  arg5[key10020] = require("metro/15290__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15276.name + "@" + _modDef15276.version;
  globalThis.URL = _mod15277.URL;
  globalThis.URLSearchParams = _mod15290.URLSearchParams;
};
