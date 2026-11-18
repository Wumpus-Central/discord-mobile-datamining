// === Module 708: _getSpanForScope ===

// Module 708 (_getSpanForScope)
import _mod686 from "module_686" /* 686 */;

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