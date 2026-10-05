// _runtime/00720__getSpanForScope.js
import _mod698 from "metro/00698__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(setPropagationContext, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod698;
    const result = obj.addNonEnumerableProperty(setPropagationContext, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
