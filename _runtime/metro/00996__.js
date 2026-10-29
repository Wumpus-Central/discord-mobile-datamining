// === Module 996: ? ===

// Module 996
import _mod693 from "module_693" /* 693 */;

require = arg1;
const dependencyMap = arg6;

export function isSentrySpan(c4) {
  return c4 instanceof _mod693.SentrySpan;
}
export function isRootSpan(activeSpan) {
  return activeSpan === _mod693.getRootSpan(activeSpan);
}
export function setEndTimeValue(arg0, _endTime) {
  arg0._endTime = _endTime;
}
export function convertSpanToTransaction(_convertSpanToTransaction) {
  _convertSpanToTransaction = _convertSpanToTransaction._convertSpanToTransaction;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      const call = _convertSpanToTransaction.call;
      typeof call === "unknown" ? _convertSpanToTransaction() : call(_convertSpanToTransaction);
    }
  }
}