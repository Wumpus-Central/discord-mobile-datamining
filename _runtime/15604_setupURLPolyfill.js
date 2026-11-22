// _runtime/15604_setupURLPolyfill.js
import _modDef15606 from "metro/15606__.js";
import _mod15607 from "metro/15607__.js";
import _mod15620 from "metro/15620__.js";
import get_ActivityIndicator from "metro/15605__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15607__.js")) {
  arg5[key10016] = require("metro/15607__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15620__.js")) {
  arg5[key10020] = require("metro/15620__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15606.name + "@" + _modDef15606.version;
  globalThis.URL = _mod15607.URL;
  globalThis.URLSearchParams = _mod15620.URLSearchParams;
}
