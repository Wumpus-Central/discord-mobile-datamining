// _runtime/14365_setupURLPolyfill.js
import _modDef14367 from "metro/14367__.js";
import _mod14368 from "metro/14368__.js";
import _mod14381 from "metro/14381__.js";
import get_ActivityIndicator from "metro/14366__.js";

for (const key10016 in require("metro/14368__.js")) {
  arg5[key10016] = require("metro/14368__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14381__.js")) {
  arg5[key10020] = require("metro/14381__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14367.name + "@" + _modDef14367.version;
  globalThis.URL = _mod14368.URL;
  globalThis.URLSearchParams = _mod14381.URLSearchParams;
};
