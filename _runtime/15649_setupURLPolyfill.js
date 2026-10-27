// _runtime/15649_setupURLPolyfill.js
import _modDef15651 from "metro/15651__.js";
import _mod15652 from "metro/15652__.js";
import _mod15665 from "metro/15665__.js";
import get_ActivityIndicator from "metro/15650__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15652__.js")) {
  arg5[key10016] = require("metro/15652__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15665__.js")) {
  arg5[key10020] = require("metro/15665__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15651.name + "@" + _modDef15651.version;
  globalThis.URL = _mod15652.URL;
  globalThis.URLSearchParams = _mod15665.URLSearchParams;
};
