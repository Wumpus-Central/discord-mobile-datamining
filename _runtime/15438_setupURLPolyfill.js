// _runtime/15438_setupURLPolyfill.js
import _modDef15440 from "metro/15440__.js";
import _mod15441 from "metro/15441__.js";
import _mod15454 from "metro/15454__.js";
import get_ActivityIndicator from "metro/15439__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15441__.js")) {
  arg5[key10016] = require("metro/15441__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15454__.js")) {
  arg5[key10020] = require("metro/15454__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15440.name + "@" + _modDef15440.version;
  globalThis.URL = _mod15441.URL;
  globalThis.URLSearchParams = _mod15454.URLSearchParams;
};
