// === Module 720: _getSpanForScope ===

// Module 720 (_getSpanForScope)
import _mod698 from "module_698" /* 698 */;

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