// _runtime/00825_getGlobalSingleton.js
import { 00821__ } from "metro/00821__.js";
import { 00826__ } from "metro/00826__.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getGlobalSingleton = function getGlobalSingleton(arg0, arg1) {
  let GLOBAL_OBJ = arg2;
  if (arg2 === undefined) {
    GLOBAL_OBJ = 00821__.GLOBAL_OBJ;
  }
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  const tmp4 = tmp3[require(undefined, 826).SDK_VERSION] || {};
  tmp3[00826__.SDK_VERSION] = tmp4;
  let tmp5 = tmp4[arg0];
  if (!tmp5) {
    const tmp7 = arg1();
    tmp4[arg0] = tmp7;
    tmp5 = tmp7;
  }
  return tmp5;
};
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = 00821__.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || 00826__.SDK_VERSION;
  const tmp4 = tmp3.version || 00826__.SDK_VERSION;
  tmp3[00826__.SDK_VERSION] = tmp3[require(undefined, 826).SDK_VERSION] || {};
  return 00821__.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = 00826__.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 826).SDK_VERSION] || {};
  tmp[00826__.SDK_VERSION] = tmp4;
  return tmp4;
};