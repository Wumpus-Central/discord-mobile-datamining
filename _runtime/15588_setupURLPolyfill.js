// _runtime/15588_setupURLPolyfill.js
import _modDef15590 from "metro/15590__.js";
import _mod15591 from "metro/15591__.js";
import _mod15604 from "metro/15604__.js";
import get_ActivityIndicator from "metro/15589__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15591__.js")) {
  arg5[key10016] = require("metro/15591__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15604__.js")) {
  arg5[key10020] = require("metro/15604__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15590.name + "@" + _modDef15590.version;
  globalThis.URL = _mod15591.URL;
  globalThis.URLSearchParams = _mod15604.URLSearchParams;
};
