// _runtime/metro/12826__.js
import _mod12803 from "12803__.js";

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12803.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12803.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
