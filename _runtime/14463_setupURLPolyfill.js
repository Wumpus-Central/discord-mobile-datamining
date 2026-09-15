// _runtime/14463_setupURLPolyfill.js
import _modDef14465 from "metro/14465__.js";
import _mod14466 from "metro/14466__.js";
import _mod14479 from "metro/14479__.js";
import get_ActivityIndicator from "metro/14464__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14466__.js")) {
  arg5[key10016] = require("metro/14466__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14479__.js")) {
  arg5[key10020] = require("metro/14479__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14465.name + "@" + _modDef14465.version;
  globalThis.URL = _mod14466.URL;
  globalThis.URLSearchParams = _mod14479.URLSearchParams;
};
