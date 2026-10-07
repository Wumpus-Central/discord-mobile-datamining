// _runtime/00720__getSpanForScope.js
import _mod698 from "metro/00698__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(setPropagationContext, arg1) {
  if (arg1) {
    const result = _mod698.addNonEnumerableProperty(setPropagationContext, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
