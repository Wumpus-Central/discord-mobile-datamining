// _runtime/15309_setupURLPolyfill.js
import _modDef15311 from "metro/15311__.js";
import _mod15312 from "metro/15312__.js";
import _mod15325 from "metro/15325__.js";
import get_ActivityIndicator from "metro/15310__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15312__.js")) {
  arg5[key10016] = require("metro/15312__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15325__.js")) {
  arg5[key10020] = require("metro/15325__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15311.name + "@" + _modDef15311.version;
  globalThis.URL = _mod15312.URL;
  globalThis.URLSearchParams = _mod15325.URLSearchParams;
};
