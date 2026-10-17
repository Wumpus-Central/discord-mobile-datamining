// _runtime/15388_setupURLPolyfill.js
import _modDef15390 from "metro/15390__.js";
import _mod15391 from "metro/15391__.js";
import _mod15404 from "metro/15404__.js";
import get_ActivityIndicator from "metro/15389__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15391__.js")) {
  arg5[key10016] = require("metro/15391__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15404__.js")) {
  arg5[key10020] = require("metro/15404__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15390.name + "@" + _modDef15390.version;
  globalThis.URL = _mod15391.URL;
  globalThis.URLSearchParams = _mod15404.URLSearchParams;
};
