// === Module 12598: ? ===

// Module 12598
import _mod12581 from "module_12581" /* 12581 */;
import _mod12582 from "module_12582" /* 12582 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12581.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12582.SDK_VERSION;
  tmp3.version || _mod12582.SDK_VERSION;
  const SDK_VERSION = _mod12582.SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12582.SDK_VERSION] || {};
  tmp3[_mod12582.SDK_VERSION] || {};
  return _mod12581.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12582.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12582.SDK_VERSION;
  const tmp4 = tmp[_mod12582.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};