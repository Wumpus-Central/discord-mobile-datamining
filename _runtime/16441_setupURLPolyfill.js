// _runtime/16441_setupURLPolyfill.js
import _modDef16443 from "metro/16443__.js";
import _mod16444 from "metro/16444__.js";
import _mod16457 from "metro/16457__.js";
import get_ActivityIndicator from "metro/16442__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/16444__.js")) {
  arg5[key10016] = require("metro/16444__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/16457__.js")) {
  arg5[key10020] = require("metro/16457__.js")[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16443.name + "@" + _modDef16443.version;
  globalThis.URL = _mod16444.URL;
  globalThis.URLSearchParams = _mod16457.URLSearchParams;
}
