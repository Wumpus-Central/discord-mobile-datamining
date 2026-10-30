// === Module 13026: ? ===

// Module 13026
import _mod13010 from "module_13010" /* 13010 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13010.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
}