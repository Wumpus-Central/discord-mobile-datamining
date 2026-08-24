// === Module 7794: getMainCarrier ===

// Module 7794 (getMainCarrier)
import getGlobalSingleton from "getGlobalSingleton" /* 7777 */;
import _mod7778 from "module_7778" /* 7778 */;

require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = getGlobalSingleton.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod7778.SDK_VERSION;
  const tmp4 = tmp3.version || _mod7778.SDK_VERSION;
  tmp3[_mod7778.SDK_VERSION] = tmp3[_mod7778.SDK_VERSION] || {};
  return getGlobalSingleton.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod7778.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod7778.SDK_VERSION] || {};
  tmp[_mod7778.SDK_VERSION] = tmp4;
  return tmp4;
};