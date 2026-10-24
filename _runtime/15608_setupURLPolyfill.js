// _runtime/15608_setupURLPolyfill.js
import _modDef15610 from "metro/15610__.js";
import _mod15611 from "metro/15611__.js";
import _mod15624 from "metro/15624__.js";
import get_ActivityIndicator from "metro/15609__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15611__.js")) {
  arg5[key10016] = require("metro/15611__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15624__.js")) {
  arg5[key10020] = require("metro/15624__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15610.name + "@" + _modDef15610.version;
  globalThis.URL = _mod15611.URL;
  globalThis.URLSearchParams = _mod15624.URLSearchParams;
};
