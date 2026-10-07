// _runtime/14147_setupURLPolyfill.js
import _modDef14149 from "metro/14149__.js";
import _mod14150 from "metro/14150__.js";
import _mod14163 from "metro/14163__.js";
import get_ActivityIndicator from "metro/14148__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14150__.js")) {
  arg5[key10016] = require("metro/14150__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14163__.js")) {
  arg5[key10020] = require("metro/14163__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14149.name + "@" + _modDef14149.version;
  globalThis.URL = _mod14150.URL;
  globalThis.URLSearchParams = _mod14163.URLSearchParams;
};
