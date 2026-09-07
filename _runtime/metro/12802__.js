// _runtime/metro/12802__.js
import _mod12803 from "12803__.js";

require = arg1;
const dependencyMap = arg6;

export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(globalMetricsAggregators, fn, arg2) {
  let tmp = arg2;
  if (!arg2) {
    tmp = globalThis;
  }
  const tmp2 = tmp.__SENTRY__ || {};
  tmp.__SENTRY__ = tmp2;
  const tmp3 = tmp2[_mod12803.SDK_VERSION] || {};
  tmp2[_mod12803.SDK_VERSION] = tmp3;
  let tmp4 = tmp3[globalMetricsAggregators];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[globalMetricsAggregators] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
