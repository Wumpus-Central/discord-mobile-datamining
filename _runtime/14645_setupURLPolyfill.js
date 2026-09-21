// _runtime/14645_setupURLPolyfill.js
import _modDef14647 from "metro/14647__.js";
import _mod14648 from "metro/14648__.js";
import _mod14661 from "metro/14661__.js";
import get_ActivityIndicator from "metro/14646__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14648__.js")) {
  arg5[key10016] = require("metro/14648__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14661__.js")) {
  arg5[key10020] = require("metro/14661__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14647.name + "@" + _modDef14647.version;
  globalThis.URL = _mod14648.URL;
  globalThis.URLSearchParams = _mod14661.URLSearchParams;
};
