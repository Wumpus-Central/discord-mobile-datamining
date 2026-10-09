// === Module 11185: ? ===

// Module 11185
import _mod11168 from "module_11168" /* 11168 */;
import _mod11169 from "module_11169" /* 11169 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod11168.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod11169.SDK_VERSION;
  const tmp4 = tmp3.version || _mod11169.SDK_VERSION;
  tmp3[_mod11169.SDK_VERSION] = tmp3[_mod11169.SDK_VERSION] || {};
  return _mod11168.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod11169.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod11169.SDK_VERSION] || {};
  tmp[_mod11169.SDK_VERSION] = tmp4;
  return tmp4;
};