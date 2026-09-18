// _runtime/14584_setupURLPolyfill.js
import _modDef14586 from "metro/14586__.js";
import _mod14587 from "metro/14587__.js";
import _mod14600 from "metro/14600__.js";
import get_ActivityIndicator from "metro/14585__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14587__.js")) {
  arg5[key10016] = require("metro/14587__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14600__.js")) {
  arg5[key10020] = require("metro/14600__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14586.name + "@" + _modDef14586.version;
  globalThis.URL = _mod14587.URL;
  globalThis.URLSearchParams = _mod14600.URLSearchParams;
};
