// _runtime/15510_setupURLPolyfill.js
import _modDef15512 from "metro/15512__.js";
import _mod15513 from "metro/15513__.js";
import _mod15526 from "metro/15526__.js";
import get_ActivityIndicator from "metro/15511__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15513__.js")) {
  arg5[key10016] = require("metro/15513__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15526__.js")) {
  arg5[key10020] = require("metro/15526__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15512.name + "@" + _modDef15512.version;
  globalThis.URL = _mod15513.URL;
  globalThis.URLSearchParams = _mod15526.URLSearchParams;
};
