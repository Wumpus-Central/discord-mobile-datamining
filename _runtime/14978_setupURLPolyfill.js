// _runtime/14978_setupURLPolyfill.js
import _modDef14980 from "metro/14980__.js";
import _mod14981 from "metro/14981__.js";
import _mod14994 from "metro/14994__.js";
import get_ActivityIndicator from "metro/14979__.js";

const require = globalThis.__r;

for (const key10016 in require("metro/14981__.js")) {
  arg5[key10016] = require("metro/14981__.js")[key10016];
  continue;
}
for (const key10020 in require("metro/14994__.js")) {
  arg5[key10020] = require("metro/14994__.js")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14980.name + "@" + _modDef14980.version;
  globalThis.URL = _mod14981.URL;
  globalThis.URLSearchParams = _mod14994.URLSearchParams;
};
