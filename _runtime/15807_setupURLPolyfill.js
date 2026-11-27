// _runtime/15807_setupURLPolyfill.js
import _modDef15809 from "metro/15809__.js";
import _mod15810 from "metro/15810__.js";
import _mod15823 from "metro/15823__.js";
import get_ActivityIndicator from "metro/15808__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15810__.js")) {
  arg5[key10016] = require("metro/15810__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15823__.js")) {
  arg5[key10020] = require("metro/15823__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15809.name + "@" + _modDef15809.version;
  globalThis.URL = _mod15810.URL;
  globalThis.URLSearchParams = _mod15823.URLSearchParams;
}
