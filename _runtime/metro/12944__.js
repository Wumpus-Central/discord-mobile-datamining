// _runtime/metro/12944__.js
import _mod12927 from "12927__.js";
import _mod12928 from "12928__.js";

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12927.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12928.SDK_VERSION;
  const tmp4 = tmp3.version || _mod12928.SDK_VERSION;
  tmp3[_mod12928.SDK_VERSION] = tmp3[_mod12928.SDK_VERSION] || {};
  return _mod12927.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod12928.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod12928.SDK_VERSION] || {};
  tmp[_mod12928.SDK_VERSION] = tmp4;
  return tmp4;
};
