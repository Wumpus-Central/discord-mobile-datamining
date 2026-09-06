// === Module 12819: ? ===

// Module 12819
import _mod12803 from "module_12803" /* 12803 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12803.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};