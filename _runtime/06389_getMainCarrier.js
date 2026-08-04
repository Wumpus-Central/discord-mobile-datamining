// _runtime/06389_getMainCarrier.js
const require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = require(6372) /* getGlobalSingleton */.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || require(6373).SDK_VERSION;
  const tmp4 = tmp3.version || require(6373).SDK_VERSION;
  tmp3[require(6373).SDK_VERSION] = tmp3[require(undefined, 6373).SDK_VERSION] || {};
  return require(6372) /* getGlobalSingleton */.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = require(6373).SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 6373).SDK_VERSION] || {};
  tmp[require(6373).SDK_VERSION] = tmp4;
  return tmp4;
};