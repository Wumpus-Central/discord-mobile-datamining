// _runtime/07472_getMainCarrier.js
import { getGlobalSingleton } from "07455_getGlobalSingleton.js";
import { 07456__ } from "metro/07456__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = getGlobalSingleton.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || 07456__.SDK_VERSION;
  const tmp4 = tmp3.version || 07456__.SDK_VERSION;
  tmp3[07456__.SDK_VERSION] = tmp3[require(undefined, 7456).SDK_VERSION] || {};
  return getGlobalSingleton.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = 07456__.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 7456).SDK_VERSION] || {};
  tmp[07456__.SDK_VERSION] = tmp4;
  return tmp4;
};