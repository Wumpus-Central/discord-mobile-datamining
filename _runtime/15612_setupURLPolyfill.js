// _runtime/15612_setupURLPolyfill.js
import _modDef15614 from "metro/15614__.js";
import _mod15615 from "metro/15615__.js";
import _mod15628 from "metro/15628__.js";
import get_ActivityIndicator from "metro/15613__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15615__.js")) {
  arg5[key10016] = require("metro/15615__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15628__.js")) {
  arg5[key10020] = require("metro/15628__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15614.name + "@" + _modDef15614.version;
  globalThis.URL = _mod15615.URL;
  globalThis.URLSearchParams = _mod15628.URLSearchParams;
};
