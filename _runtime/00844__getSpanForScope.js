// === Module 844: _getSpanForScope ===

// Module 844 (_getSpanForScope)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 822 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";
arg5._getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};