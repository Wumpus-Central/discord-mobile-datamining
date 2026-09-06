// === Module 12826: ? ===

// Module 12826
import _mod12803 from "module_12803" /* 12803 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  if (sentrySpan) {
    const result = _mod12803.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const result1 = _mod12803.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};