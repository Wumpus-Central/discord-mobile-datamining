// _runtime/15875_setupURLPolyfill.js
import _modDef15877 from "metro/15877__.js";
import _mod15878 from "metro/15878__.js";
import _mod15891 from "metro/15891__.js";
import get_ActivityIndicator from "metro/15876__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/15878__.js")) {
  arg5[key10016] = require("metro/15878__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/15891__.js")) {
  arg5[key10020] = require("metro/15891__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15877.name + "@" + _modDef15877.version;
  globalThis.URL = _mod15878.URL;
  globalThis.URLSearchParams = _mod15891.URLSearchParams;
};
