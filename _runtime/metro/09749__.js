// _runtime/metro/09749__.js
import _mod9732 from "09732__.js";
import _mod9733 from "09733__.js";

require = arg1;
const dependencyMap = arg6;

export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9732.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9733.SDK_VERSION;
  const tmp4 = tmp3.version || _mod9733.SDK_VERSION;
  tmp3[_mod9733.SDK_VERSION] = tmp3[_mod9733.SDK_VERSION] || {};
  return _mod9732.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod9733.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod9733.SDK_VERSION] || {};
  tmp[_mod9733.SDK_VERSION] = tmp4;
  return tmp4;
}
