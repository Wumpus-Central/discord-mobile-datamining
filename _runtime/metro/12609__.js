// === Module 12609: ? ===

// Module 12609
import _mod12586 from "module_12586" /* 12586 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  const tmp = sentrySpan;
  if (tmp) {
    const obj = _mod12586;
    const result = obj.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const obj2 = _mod12586;
    const result1 = obj2.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};