// _runtime/13857_setupURLPolyfill.js
import _modDef13859 from "metro/13859__.js";
import _mod13860 from "metro/13860__.js";
import _mod13873 from "metro/13873__.js";
import get_ActivityIndicator from "metro/13858__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/13860__.js")) {
  arg5[key10016] = require("metro/13860__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/13873__.js")) {
  arg5[key10020] = require("metro/13873__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13859.name + "@" + _modDef13859.version;
  globalThis.URL = _mod13860.URL;
  globalThis.URLSearchParams = _mod13873.URLSearchParams;
};
