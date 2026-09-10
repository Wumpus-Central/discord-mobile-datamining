// === Module 12896: ? ===

// Module 12896
import _mod12873 from "module_12873" /* 12873 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  if (sentrySpan) {
    const result = _mod12873.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const result1 = _mod12873.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};