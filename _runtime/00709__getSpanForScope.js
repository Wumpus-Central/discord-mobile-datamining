// === Module 709: _getSpanForScope ===

// Module 709 (_getSpanForScope)
import _mod687 from "module_687" /* 687 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(setPropagationContext, arg1) {
  if (arg1) {
    const result = _mod687.addNonEnumerableProperty(setPropagationContext, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};