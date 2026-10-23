// _runtime/metro/12549__.js
import _mod12526 from "12526__.js";

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  if (sentrySpan) {
    const result = _mod12526.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const result1 = _mod12526.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};
