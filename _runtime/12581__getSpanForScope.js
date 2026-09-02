// === Module 12581: _getSpanForScope ===

// Module 12581 (_getSpanForScope)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 12565 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";
arg5._getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
    const obj = addNonEnumerableProperty;
  } else {
    delete tmp2[tmp];
  }
};