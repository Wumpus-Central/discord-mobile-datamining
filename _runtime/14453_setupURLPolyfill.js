// _runtime/14453_setupURLPolyfill.js
import _modDef14455 from "metro/14455__.js";
import _mod14456 from "metro/14456__.js";
import _mod14469 from "metro/14469__.js";
import get_ActivityIndicator from "metro/14454__.js";

for (const key10016 in require("metro/14456__.js")) {
  arg5[key10016] = require("metro/14456__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14469__.js")) {
  arg5[key10020] = require("metro/14469__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14455.name + "@" + _modDef14455.version;
  globalThis.URL = _mod14456.URL;
  globalThis.URLSearchParams = _mod14469.URLSearchParams;
};
