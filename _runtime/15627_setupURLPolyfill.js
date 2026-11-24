// _runtime/15627_setupURLPolyfill.js
import _modDef15629 from "metro/15629__.js";
import _mod15630 from "metro/15630__.js";
import _mod15643 from "metro/15643__.js";
import get_ActivityIndicator from "metro/15628__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15630__.js")) {
  arg5[key10016] = require("metro/15630__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15643__.js")) {
  arg5[key10020] = require("metro/15643__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15629.name + "@" + _modDef15629.version;
  globalThis.URL = _mod15630.URL;
  globalThis.URLSearchParams = _mod15643.URLSearchParams;
}
