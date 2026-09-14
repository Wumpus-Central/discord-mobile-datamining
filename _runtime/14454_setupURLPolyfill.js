// _runtime/14454_setupURLPolyfill.js
import _modDef14456 from "metro/14456__.js";
import _mod14457 from "metro/14457__.js";
import _mod14470 from "metro/14470__.js";
import get_ActivityIndicator from "metro/14455__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14457__.js")) {
  arg5[key10016] = require("metro/14457__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14470__.js")) {
  arg5[key10020] = require("metro/14470__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14456.name + "@" + _modDef14456.version;
  globalThis.URL = _mod14457.URL;
  globalThis.URLSearchParams = _mod14470.URLSearchParams;
};
