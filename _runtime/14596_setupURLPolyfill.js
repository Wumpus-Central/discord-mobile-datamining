// _runtime/14596_setupURLPolyfill.js
import _modDef14598 from "metro/14598__.js";
import _mod14599 from "metro/14599__.js";
import _mod14612 from "metro/14612__.js";
import get_ActivityIndicator from "metro/14597__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14599__.js")) {
  arg5[key10016] = require("metro/14599__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14612__.js")) {
  arg5[key10020] = require("metro/14612__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14598.name + "@" + _modDef14598.version;
  globalThis.URL = _mod14599.URL;
  globalThis.URLSearchParams = _mod14612.URLSearchParams;
};
