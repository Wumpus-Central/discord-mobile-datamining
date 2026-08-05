// _runtime/07397__getSpanForScope.js
const require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";
arg5._getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
arg5._setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = require("07381_addNonEnumerableProperty.js") /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
    const obj = require("07381_addNonEnumerableProperty.js") /* addNonEnumerableProperty */;
  } else {
    delete tmp2[tmp];
  }
};