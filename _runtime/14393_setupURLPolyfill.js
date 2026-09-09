// _runtime/14393_setupURLPolyfill.js
import _modDef14395 from "metro/14395__.js";
import _mod14396 from "metro/14396__.js";
import _mod14409 from "metro/14409__.js";
import get_ActivityIndicator from "metro/14394__.js";

for (const key10016 in require("metro/14396__.js")) {
  arg5[key10016] = require("metro/14396__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14409__.js")) {
  arg5[key10020] = require("metro/14409__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14395.name + "@" + _modDef14395.version;
  globalThis.URL = _mod14396.URL;
  globalThis.URLSearchParams = _mod14409.URLSearchParams;
};
