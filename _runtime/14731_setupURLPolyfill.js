// _runtime/14731_setupURLPolyfill.js
import _modDef14733 from "metro/14733__.js";
import _mod14734 from "metro/14734__.js";
import _mod14747 from "metro/14747__.js";
import get_ActivityIndicator from "metro/14732__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14734__.js")) {
  arg5[key10016] = require("metro/14734__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14747__.js")) {
  arg5[key10020] = require("metro/14747__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14733.name + "@" + _modDef14733.version;
  globalThis.URL = _mod14734.URL;
  globalThis.URLSearchParams = _mod14747.URLSearchParams;
};
