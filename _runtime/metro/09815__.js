// === Module 9815: ? ===

// Module 9815
import _mod9798 from "module_9798" /* 9798 */;
import _mod9799 from "module_9799" /* 9799 */;

require = arg1;
const dependencyMap = arg6;

export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9798.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9799.SDK_VERSION;
  const tmp4 = tmp3.version || _mod9799.SDK_VERSION;
  tmp3[_mod9799.SDK_VERSION] = tmp3[_mod9799.SDK_VERSION] || {};
  return _mod9798.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod9799.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod9799.SDK_VERSION] || {};
  tmp[_mod9799.SDK_VERSION] = tmp4;
  return tmp4;
}