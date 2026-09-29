// _runtime/metro/12506__.js
import _mod12490 from "12490__.js";

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12490.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
