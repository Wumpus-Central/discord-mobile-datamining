// === Module 825: getGlobalSingleton ===

// Module 825 (getGlobalSingleton)
import _mod821 from "module_821" /* 821 */;
import _mod826 from "module_826" /* 826 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getGlobalSingleton = function getGlobalSingleton(arg0, fn) {
  let GLOBAL_OBJ = arg2;
  if (arg2 === undefined) {
    GLOBAL_OBJ = _mod821.GLOBAL_OBJ;
  }
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  const tmp4 = tmp3[_mod826.SDK_VERSION] || {};
  tmp3[_mod826.SDK_VERSION] = tmp4;
  let tmp5 = tmp4[arg0];
  if (!tmp5) {
    const tmp7 = fn();
    tmp4[arg0] = tmp7;
    tmp5 = tmp7;
  }
  return tmp5;
};
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod821.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod826.SDK_VERSION;
  tmp3[_mod826.SDK_VERSION] = tmp3[_mod826.SDK_VERSION] || {};
  return _mod821.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod826.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod826.SDK_VERSION] || {};
  tmp[_mod826.SDK_VERSION] = tmp4;
  return tmp4;
};