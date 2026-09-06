// _runtime/metro/00690__.js
import _mod686 from "00686__.js";
import SDK_VERSION2 from "../00691_SDK_VERSION.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getGlobalSingleton = function getGlobalSingleton(arg0, fn) {
  let GLOBAL_OBJ = arg2;
  if (arg2 === undefined) {
    GLOBAL_OBJ = _mod686.GLOBAL_OBJ;
  }
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  const tmp4 = tmp3[SDK_VERSION2.SDK_VERSION] || {};
  tmp3[SDK_VERSION2.SDK_VERSION] = tmp4;
  let tmp5 = tmp4[arg0];
  if (!tmp5) {
    const tmp7 = fn();
    tmp4[arg0] = tmp7;
    tmp5 = tmp7;
  }
  return tmp5;
};
export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod686.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || SDK_VERSION2.SDK_VERSION;
  const tmp4 = tmp3.version || SDK_VERSION2.SDK_VERSION;
  tmp3[SDK_VERSION2.SDK_VERSION] = tmp3[SDK_VERSION2.SDK_VERSION] || {};
  return _mod686.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = SDK_VERSION2.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[SDK_VERSION2.SDK_VERSION] || {};
  tmp[SDK_VERSION2.SDK_VERSION] = tmp4;
  return tmp4;
};
