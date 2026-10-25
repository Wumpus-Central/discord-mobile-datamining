// _runtime/15613_setupURLPolyfill.js
import _modDef15615 from "metro/15615__.js";
import _mod15616 from "metro/15616__.js";
import _mod15629 from "metro/15629__.js";
import get_ActivityIndicator from "metro/15614__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15616__.js")) {
  arg5[key10016] = require("metro/15616__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15629__.js")) {
  arg5[key10020] = require("metro/15629__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15615.name + "@" + _modDef15615.version;
  globalThis.URL = _mod15616.URL;
  globalThis.URLSearchParams = _mod15629.URLSearchParams;
};
