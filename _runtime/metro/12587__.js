// === Module 12587: ? ===

// Module 12587
import _mod12571 from "module_12571" /* 12571 */;

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