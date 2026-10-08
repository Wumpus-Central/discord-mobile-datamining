// _runtime/14446_setupURLPolyfill.js
import _modDef14448 from "metro/14448__.js";
import _mod14449 from "metro/14449__.js";
import _mod14462 from "metro/14462__.js";
import get_ActivityIndicator from "metro/14447__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14449__.js")) {
  arg5[key10016] = require("metro/14449__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14462__.js")) {
  arg5[key10020] = require("metro/14462__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14448.name + "@" + _modDef14448.version;
  globalThis.URL = _mod14449.URL;
  globalThis.URLSearchParams = _mod14462.URLSearchParams;
};
