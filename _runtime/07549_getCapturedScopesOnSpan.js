// _runtime/07549_getCapturedScopesOnSpan.js
import { addNonEnumerableProperty } from "07526_addNonEnumerableProperty.js";
const require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj = addNonEnumerableProperty;
    const result1 = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentryScope, arg1);
    const obj2 = addNonEnumerableProperty;
  }
};