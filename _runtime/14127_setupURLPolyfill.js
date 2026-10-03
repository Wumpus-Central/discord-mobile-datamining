// _runtime/14127_setupURLPolyfill.js
import _modDef14129 from "metro/14129__.js";
import _mod14130 from "metro/14130__.js";
import _mod14143 from "metro/14143__.js";
import get_ActivityIndicator from "metro/14128__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14130__.js")) {
  arg5[key10016] = require("metro/14130__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14143__.js")) {
  arg5[key10020] = require("metro/14143__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14129.name + "@" + _modDef14129.version;
  globalThis.URL = _mod14130.URL;
  globalThis.URLSearchParams = _mod14143.URLSearchParams;
};
