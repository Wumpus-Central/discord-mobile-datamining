// _runtime/14147_setupURLPolyfill.js
import _modDef14149 from "metro/14149__.js";
import URL from "14150_URL.js";
import _mod14163 from "metro/14163__.js";
import react_native from "14148_react-native.js";

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14163) {
  exports[key10020] = _mod14163[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14149.name + "@" + _modDef14149.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14163.URLSearchParams;
};
