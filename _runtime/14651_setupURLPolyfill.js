// _runtime/14651_setupURLPolyfill.js
import _modDef14653 from "metro/14653__.js";
import _mod14654 from "metro/14654__.js";
import _mod14667 from "metro/14667__.js";
import get_ActivityIndicator from "metro/14652__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14654__.js")) {
  arg5[key10016] = require("metro/14654__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14667__.js")) {
  arg5[key10020] = require("metro/14667__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14653.name + "@" + _modDef14653.version;
  globalThis.URL = _mod14654.URL;
  globalThis.URLSearchParams = _mod14667.URLSearchParams;
};
