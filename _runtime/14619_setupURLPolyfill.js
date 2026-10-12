// _runtime/14619_setupURLPolyfill.js
import _modDef14621 from "metro/14621__.js";
import _mod14622 from "metro/14622__.js";
import _mod14635 from "metro/14635__.js";
import get_ActivityIndicator from "metro/14620__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14622__.js")) {
  arg5[key10016] = require("metro/14622__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14635__.js")) {
  arg5[key10020] = require("metro/14635__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14621.name + "@" + _modDef14621.version;
  globalThis.URL = _mod14622.URL;
  globalThis.URLSearchParams = _mod14635.URLSearchParams;
};
