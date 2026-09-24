// _runtime/14740_setupURLPolyfill.js
import _modDef14742 from "metro/14742__.js";
import _mod14743 from "metro/14743__.js";
import _mod14756 from "metro/14756__.js";
import get_ActivityIndicator from "metro/14741__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14743__.js")) {
  arg5[key10016] = require("metro/14743__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14756__.js")) {
  arg5[key10020] = require("metro/14756__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14742.name + "@" + _modDef14742.version;
  globalThis.URL = _mod14743.URL;
  globalThis.URLSearchParams = _mod14756.URLSearchParams;
};
