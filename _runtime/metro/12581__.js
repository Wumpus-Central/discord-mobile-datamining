// _runtime/metro/12581__.js
import _mod12582 from "12582__.js";

export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(globalMetricsAggregators, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod12582.SDK_VERSION;
  const tmp3 = tmp2[_mod12582.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[globalMetricsAggregators];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[globalMetricsAggregators] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
