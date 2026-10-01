// _runtime/14060_setupURLPolyfill.js
import _modDef14062 from "metro/14062__.js";
import _mod14063 from "metro/14063__.js";
import _mod14076 from "metro/14076__.js";
import get_ActivityIndicator from "metro/14061__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14063__.js")) {
  arg5[key10016] = require("metro/14063__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14076__.js")) {
  arg5[key10020] = require("metro/14076__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14062.name + "@" + _modDef14062.version;
  globalThis.URL = _mod14063.URL;
  globalThis.URLSearchParams = _mod14076.URLSearchParams;
};
