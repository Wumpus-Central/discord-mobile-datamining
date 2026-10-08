// === Module 11011: ? ===

// Module 11011
import _mod10994 from "module_10994" /* 10994 */;
import _mod10995 from "module_10995" /* 10995 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod10994.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod10995.SDK_VERSION;
  const tmp4 = tmp3.version || _mod10995.SDK_VERSION;
  tmp3[_mod10995.SDK_VERSION] = tmp3[_mod10995.SDK_VERSION] || {};
  return _mod10994.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod10995.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod10995.SDK_VERSION] || {};
  tmp[_mod10995.SDK_VERSION] = tmp4;
  return tmp4;
};