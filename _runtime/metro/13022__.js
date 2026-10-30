// === Module 13022: ? ===

// Module 13022
import _mod13005 from "module_13005" /* 13005 */;
import _mod13006 from "module_13006" /* 13006 */;

require = arg1;
const dependencyMap = arg6;

export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13005.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13006.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13006.SDK_VERSION;
  tmp3[_mod13006.SDK_VERSION] = tmp3[_mod13006.SDK_VERSION] || {};
  return _mod13005.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13006.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13006.SDK_VERSION] || {};
  tmp[_mod13006.SDK_VERSION] = tmp4;
  return tmp4;
}