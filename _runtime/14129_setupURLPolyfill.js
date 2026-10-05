// === Module 14129: setupURLPolyfill ===

// Module 14129 (setupURLPolyfill)
import _modDef14131 from "module_14131" /* 14131 */;
import URL from "URL" /* 14132 */;
import _mod14145 from "module_14145" /* 14145 */;
import react_native from "react-native" /* 14130 */;

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