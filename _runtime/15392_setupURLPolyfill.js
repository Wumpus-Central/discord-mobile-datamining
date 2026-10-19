// _runtime/15392_setupURLPolyfill.js
import _modDef15394 from "metro/15394__.js";
import _mod15395 from "metro/15395__.js";
import _mod15408 from "metro/15408__.js";
import get_ActivityIndicator from "metro/15393__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15395__.js")) {
  arg5[key10016] = require("metro/15395__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15408__.js")) {
  arg5[key10020] = require("metro/15408__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15394.name + "@" + _modDef15394.version;
  globalThis.URL = _mod15395.URL;
  globalThis.URLSearchParams = _mod15408.URLSearchParams;
};
