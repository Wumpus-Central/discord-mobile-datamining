// _runtime/14129_setupURLPolyfill.js
import _modDef14131 from "metro/14131__.js";
import URL from "14132_URL.js";
import _mod14145 from "metro/14145__.js";
import react_native from "14130_react-native.js";

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14145) {
  exports[key10020] = _mod14145[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14131.name + "@" + _modDef14131.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14145.URLSearchParams;
};
