// === Module 13299: ? ===

// Module 13299
import _mod13282 from "module_13282" /* 13282 */;
import _mod13283 from "module_13283" /* 13283 */;

require = arg1;
const dependencyMap = arg6;

export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13282.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13283.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13283.SDK_VERSION;
  tmp3[_mod13283.SDK_VERSION] = tmp3[_mod13283.SDK_VERSION] || {};
  return _mod13282.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13283.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13283.SDK_VERSION] || {};
  tmp[_mod13283.SDK_VERSION] = tmp4;
  return tmp4;
}