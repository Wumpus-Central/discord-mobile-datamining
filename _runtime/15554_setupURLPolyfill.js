// _runtime/15554_setupURLPolyfill.js
import _modDef15556 from "metro/15556__.js";
import _mod15557 from "metro/15557__.js";
import _mod15570 from "metro/15570__.js";
import get_ActivityIndicator from "metro/15555__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15557__.js")) {
  arg5[key10016] = require("metro/15557__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15570__.js")) {
  arg5[key10020] = require("metro/15570__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15556.name + "@" + _modDef15556.version;
  globalThis.URL = _mod15557.URL;
  globalThis.URLSearchParams = _mod15570.URLSearchParams;
};
