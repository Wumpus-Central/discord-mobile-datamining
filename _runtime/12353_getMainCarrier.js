// === Module 12353: getMainCarrier ===

// Module 12353 (getMainCarrier)
import getGlobalSingleton from "getGlobalSingleton" /* 12336 */;
import _mod12337 from "module_12337" /* 12337 */;

require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = getGlobalSingleton.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12337.SDK_VERSION;
  const tmp4 = tmp3.version || _mod12337.SDK_VERSION;
  tmp3[_mod12337.SDK_VERSION] = tmp3[_mod12337.SDK_VERSION] || {};
  return getGlobalSingleton.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod12337.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod12337.SDK_VERSION] || {};
  tmp[_mod12337.SDK_VERSION] = tmp4;
  return tmp4;
};