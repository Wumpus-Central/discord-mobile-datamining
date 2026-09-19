// === Module 13066: ? ===

// Module 13066
import _mod13049 from "module_13049" /* 13049 */;
import _mod13050 from "module_13050" /* 13050 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod13049.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13050.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13050.SDK_VERSION;
  tmp3[_mod13050.SDK_VERSION] = tmp3[_mod13050.SDK_VERSION] || {};
  return _mod13049.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13050.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13050.SDK_VERSION] || {};
  tmp[_mod13050.SDK_VERSION] = tmp4;
  return tmp4;
};