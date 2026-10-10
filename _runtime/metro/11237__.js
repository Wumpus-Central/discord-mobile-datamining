// === Module 11237: ? ===

// Module 11237
import _mod11214 from "module_11214" /* 11214 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  if (sentrySpan) {
    const result = _mod11214.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const result1 = _mod11214.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};