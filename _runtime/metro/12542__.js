// _runtime/metro/12542__.js
import _mod12526 from "12526__.js";

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12526.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
