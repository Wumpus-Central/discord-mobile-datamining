// === Module 11226: ? ===

// Module 11226
import _mod11209 from "module_11209" /* 11209 */;
import _mod11210 from "module_11210" /* 11210 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod11209.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod11210.SDK_VERSION;
  const tmp4 = tmp3.version || _mod11210.SDK_VERSION;
  tmp3[_mod11210.SDK_VERSION] = tmp3[_mod11210.SDK_VERSION] || {};
  return _mod11209.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod11210.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod11210.SDK_VERSION] || {};
  tmp[_mod11210.SDK_VERSION] = tmp4;
  return tmp4;
};