// === Module 13033: ? ===

// Module 13033
import _mod13010 from "module_13010" /* 13010 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
}
export function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  if (sentrySpan) {
    const result = _mod13010.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const result1 = _mod13010.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
}