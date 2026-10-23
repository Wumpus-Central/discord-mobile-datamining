// _runtime/15567_setupURLPolyfill.js
import _modDef15569 from "metro/15569__.js";
import _mod15570 from "metro/15570__.js";
import _mod15583 from "metro/15583__.js";
import get_ActivityIndicator from "metro/15568__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15570__.js")) {
  arg5[key10016] = require("metro/15570__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15583__.js")) {
  arg5[key10020] = require("metro/15583__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15569.name + "@" + _modDef15569.version;
  globalThis.URL = _mod15570.URL;
  globalThis.URLSearchParams = _mod15583.URLSearchParams;
};
