// _runtime/metro/13057__.js
import _mod13040 from "13040__.js";
import _mod13041 from "13041__.js";

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod13040.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13041.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13041.SDK_VERSION;
  tmp3[_mod13041.SDK_VERSION] = tmp3[_mod13041.SDK_VERSION] || {};
  return _mod13040.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13041.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13041.SDK_VERSION] || {};
  tmp[_mod13041.SDK_VERSION] = tmp4;
  return tmp4;
};
