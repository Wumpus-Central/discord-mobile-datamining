// _runtime/13856_setupURLPolyfill.js
import _modDef13858 from "metro/13858__.js";
import _mod13859 from "metro/13859__.js";
import _mod13872 from "metro/13872__.js";
import get_ActivityIndicator from "metro/13857__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/13859__.js")) {
  arg5[key10016] = require("metro/13859__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/13872__.js")) {
  arg5[key10020] = require("metro/13872__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13858.name + "@" + _modDef13858.version;
  globalThis.URL = _mod13859.URL;
  globalThis.URLSearchParams = _mod13872.URLSearchParams;
};
