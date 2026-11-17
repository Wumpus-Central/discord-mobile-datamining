// _runtime/16850_setupURLPolyfill.js
import _modDef16852 from "metro/16852__.js";
import _mod16853 from "metro/16853__.js";
import _mod16866 from "metro/16866__.js";
import get_ActivityIndicator from "metro/16851__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16853__.js")) {
  arg5[key10016] = require("metro/16853__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16866__.js")) {
  arg5[key10020] = require("metro/16866__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16852.name + "@" + _modDef16852.version;
  globalThis.URL = _mod16853.URL;
  globalThis.URLSearchParams = _mod16866.URLSearchParams;
}
