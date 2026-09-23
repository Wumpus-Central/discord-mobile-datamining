// === Module 13154: ? ===

// Module 13154
import _mod13137 from "module_13137" /* 13137 */;
import _mod13138 from "module_13138" /* 13138 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod13137.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13138.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13138.SDK_VERSION;
  tmp3[_mod13138.SDK_VERSION] = tmp3[_mod13138.SDK_VERSION] || {};
  return _mod13137.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13138.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13138.SDK_VERSION] || {};
  tmp[_mod13138.SDK_VERSION] = tmp4;
  return tmp4;
};