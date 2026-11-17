// === Module 9828: ? ===

// Module 9828
import _mod9811 from "module_9811" /* 9811 */;
import _mod9812 from "module_9812" /* 9812 */;

require = arg1;
const dependencyMap = arg6;

export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9811.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9812.SDK_VERSION;
  const tmp4 = tmp3.version || _mod9812.SDK_VERSION;
  tmp3[_mod9812.SDK_VERSION] = tmp3[_mod9812.SDK_VERSION] || {};
  return _mod9811.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod9812.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod9812.SDK_VERSION] || {};
  tmp[_mod9812.SDK_VERSION] = tmp4;
  return tmp4;
}