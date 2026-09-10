// _runtime/14442_setupURLPolyfill.js
import _modDef14444 from "metro/14444__.js";
import _mod14445 from "metro/14445__.js";
import _mod14458 from "metro/14458__.js";
import get_ActivityIndicator from "metro/14443__.js";

for (const key10016 in require("metro/14445__.js")) {
  arg5[key10016] = require("metro/14445__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14458__.js")) {
  arg5[key10020] = require("metro/14458__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14444.name + "@" + _modDef14444.version;
  globalThis.URL = _mod14445.URL;
  globalThis.URLSearchParams = _mod14458.URLSearchParams;
};
