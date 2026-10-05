// === Module 701: ? ===

// Module 701
import _mod697 from "module_697" /* 697 */;
import SDK_VERSION3 from "SDK_VERSION" /* 702 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getGlobalSingleton = function getGlobalSingleton(clientToLogBufferMap, fn) {
  let GLOBAL_OBJ = arg2;
  if (arg2 === undefined) {
    GLOBAL_OBJ = _mod697.GLOBAL_OBJ;
  }
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  const SDK_VERSION = SDK_VERSION3.SDK_VERSION;
  const tmp4 = tmp3[SDK_VERSION3.SDK_VERSION] || {};
  tmp3[SDK_VERSION] = tmp4;
  let tmp5 = tmp4[clientToLogBufferMap];
  if (!tmp5) {
    const tmp7 = fn();
    tmp4[clientToLogBufferMap] = tmp7;
    tmp5 = tmp7;
  }
  return tmp5;
};
export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod697.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || SDK_VERSION3.SDK_VERSION;
  tmp3.version || SDK_VERSION3.SDK_VERSION;
  const SDK_VERSION = SDK_VERSION3.SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[SDK_VERSION3.SDK_VERSION] || {};
  tmp3[SDK_VERSION3.SDK_VERSION] || {};
  return _mod697.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || SDK_VERSION3.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = SDK_VERSION3.SDK_VERSION;
  const tmp4 = tmp[SDK_VERSION3.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};