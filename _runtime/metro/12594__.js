// _runtime/metro/12594__.js
import _mod12571 from "12571__.js";

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  const tmp = sentrySpan;
  if (tmp) {
    const obj = _mod12571;
    const result = obj.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, isolationScope);
    const obj2 = _mod12571;
    const result1 = obj2.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};
