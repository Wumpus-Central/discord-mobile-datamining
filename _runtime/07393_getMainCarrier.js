// _runtime/07393_getMainCarrier.js
const require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = require("07376_getGlobalSingleton.js") /* getGlobalSingleton */.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || require("metro/07377__.js").SDK_VERSION;
  const tmp4 = tmp3.version || require("metro/07377__.js").SDK_VERSION;
  tmp3[require("metro/07377__.js").SDK_VERSION] = tmp3[require(undefined, 7377).SDK_VERSION] || {};
  return require("07376_getGlobalSingleton.js") /* getGlobalSingleton */.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = require("metro/07377__.js").SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 7377).SDK_VERSION] || {};
  tmp[require("metro/07377__.js").SDK_VERSION] = tmp4;
  return tmp4;
};