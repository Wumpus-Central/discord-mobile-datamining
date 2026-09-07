// === Module 12819: ? ===

// Module 12819
import _mod12802 from "module_12802" /* 12802 */;
import _mod12803 from "module_12803" /* 12803 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12802.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12803.SDK_VERSION;
  const tmp4 = tmp3.version || _mod12803.SDK_VERSION;
  tmp3[_mod12803.SDK_VERSION] = tmp3[_mod12803.SDK_VERSION] || {};
  return _mod12802.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod12803.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod12803.SDK_VERSION] || {};
  tmp[_mod12803.SDK_VERSION] = tmp4;
  return tmp4;
};