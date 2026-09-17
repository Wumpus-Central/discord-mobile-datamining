// _runtime/14489_setupURLPolyfill.js
import _modDef14491 from "metro/14491__.js";
import _mod14492 from "metro/14492__.js";
import _mod14505 from "metro/14505__.js";
import get_ActivityIndicator from "metro/14490__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14492__.js")) {
  arg5[key10016] = require("metro/14492__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14505__.js")) {
  arg5[key10020] = require("metro/14505__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14491.name + "@" + _modDef14491.version;
  globalThis.URL = _mod14492.URL;
  globalThis.URLSearchParams = _mod14505.URLSearchParams;
};
