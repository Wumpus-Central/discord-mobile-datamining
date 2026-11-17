// _runtime/metro/09832__.js
import _mod9816 from "09816__.js";

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
}
export function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod9816.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
}
