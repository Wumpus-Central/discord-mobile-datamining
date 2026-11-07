// _runtime/16499_setupURLPolyfill.js
import _modDef16501 from "metro/16501__.js";
import _mod16502 from "metro/16502__.js";
import _mod16515 from "metro/16515__.js";
import get_ActivityIndicator from "metro/16500__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16502__.js")) {
  arg5[key10016] = require("metro/16502__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16515__.js")) {
  arg5[key10020] = require("metro/16515__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16501.name + "@" + _modDef16501.version;
  globalThis.URL = _mod16502.URL;
  globalThis.URLSearchParams = _mod16515.URLSearchParams;
}
