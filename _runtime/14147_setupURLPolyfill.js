// === Module 14147: setupURLPolyfill ===

// Module 14147 (setupURLPolyfill)
import _modDef14149 from "module_14149" /* 14149 */;
import URL from "URL" /* 14150 */;
import _mod14163 from "module_14163" /* 14163 */;
import react_native from "react-native" /* 14148 */;

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