// === Module 12654: ? ===

// Module 12654
import _mod12637 from "module_12637" /* 12637 */;
import _mod12638 from "module_12638" /* 12638 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12637.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12638.SDK_VERSION;
  const tmp4 = tmp3.version || _mod12638.SDK_VERSION;
  tmp3[_mod12638.SDK_VERSION] = tmp3[_mod12638.SDK_VERSION] || {};
  return _mod12637.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod12638.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod12638.SDK_VERSION] || {};
  tmp[_mod12638.SDK_VERSION] = tmp4;
  return tmp4;
};