// _runtime/07393_getMainCarrier.js
import { getGlobalSingleton } from "07376_getGlobalSingleton.js";
import { 07377__ } from "metro/07377__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = getGlobalSingleton.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || 07377__.SDK_VERSION;
  const tmp4 = tmp3.version || 07377__.SDK_VERSION;
  tmp3[07377__.SDK_VERSION] = tmp3[require(undefined, 7377).SDK_VERSION] || {};
  return getGlobalSingleton.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = 07377__.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 7377).SDK_VERSION] || {};
  tmp[07377__.SDK_VERSION] = tmp4;
  return tmp4;
};