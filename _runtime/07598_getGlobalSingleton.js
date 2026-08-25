// === Module 7598: getGlobalSingleton ===

// Module 7598 (getGlobalSingleton)
import _mod7599 from "module_7599" /* 7599 */;

require = arg1;
const dependencyMap = arg6;
arg5.GLOBAL_OBJ = globalThis;
arg5.getGlobalSingleton = function getGlobalSingleton(arg0, arg1, arg2) {
  let tmp = arg2;
  if (!arg2) {
    tmp = globalThis;
  }
  const tmp2 = tmp.__SENTRY__ || {};
  tmp.__SENTRY__ = tmp2;
  const tmp3 = tmp2[_mod7599.SDK_VERSION] || {};
  tmp2[_mod7599.SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = arg1();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};