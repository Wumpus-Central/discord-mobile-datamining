// _runtime/15533_setupURLPolyfill.js
import _modDef15535 from "metro/15535__.js";
import _mod15536 from "metro/15536__.js";
import _mod15549 from "metro/15549__.js";
import get_ActivityIndicator from "metro/15534__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15536__.js")) {
  arg5[key10016] = require("metro/15536__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15549__.js")) {
  arg5[key10020] = require("metro/15549__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15535.name + "@" + _modDef15535.version;
  globalThis.URL = _mod15536.URL;
  globalThis.URLSearchParams = _mod15549.URLSearchParams;
}
