// _runtime/15483_setupURLPolyfill.js
import _modDef15485 from "metro/15485__.js";
import _mod15486 from "metro/15486__.js";
import _mod15499 from "metro/15499__.js";
import get_ActivityIndicator from "metro/15484__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15486__.js")) {
  arg5[key10016] = require("metro/15486__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15499__.js")) {
  arg5[key10020] = require("metro/15499__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15485.name + "@" + _modDef15485.version;
  globalThis.URL = _mod15486.URL;
  globalThis.URLSearchParams = _mod15499.URLSearchParams;
}
