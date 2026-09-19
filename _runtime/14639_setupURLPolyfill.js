// _runtime/14639_setupURLPolyfill.js
import _modDef14641 from "metro/14641__.js";
import _mod14642 from "metro/14642__.js";
import _mod14655 from "metro/14655__.js";
import get_ActivityIndicator from "metro/14640__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14642__.js")) {
  arg5[key10016] = require("metro/14642__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14655__.js")) {
  arg5[key10020] = require("metro/14655__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14641.name + "@" + _modDef14641.version;
  globalThis.URL = _mod14642.URL;
  globalThis.URLSearchParams = _mod14655.URLSearchParams;
};
