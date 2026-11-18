// _runtime/00708__getSpanForScope.js
import _mod686 from "metro/00686__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentrySpan = "_sentrySpan";

export function _getSpanForScope(currentScope) {
  return currentScope[_sentrySpan];
}
export function _setSpanForScope(currentScope, sentryNonRecordingSpan) {
  if (sentryNonRecordingSpan) {
    const result = _mod686.addNonEnumerableProperty(currentScope, _sentrySpan, sentryNonRecordingSpan);
  } else {
    delete tmp2[tmp];
  }
}
