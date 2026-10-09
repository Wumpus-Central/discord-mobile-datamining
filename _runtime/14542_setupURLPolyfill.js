// _runtime/14542_setupURLPolyfill.js
import _modDef14544 from "metro/14544__.js";
import _mod14545 from "metro/14545__.js";
import _mod14558 from "metro/14558__.js";
import get_ActivityIndicator from "metro/14543__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14545__.js")) {
  arg5[key10016] = require("metro/14545__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14558__.js")) {
  arg5[key10020] = require("metro/14558__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14544.name + "@" + _modDef14544.version;
  globalThis.URL = _mod14545.URL;
  globalThis.URLSearchParams = _mod14558.URLSearchParams;
};
