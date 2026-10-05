// _runtime/metro/12587__.js
import _mod12571 from "12571__.js";

const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(self) {
  return self[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  const tmp2 = arg1;
  if (tmp2) {
    const obj = _mod12571;
    const result = obj.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp[_sentrySpan];
  }
};
