// === Module 984: ? ===

// Module 984
import _mod681 from "module_681" /* 681 */;

require = arg1;
const dependencyMap = arg6;

export function isSentrySpan(c4) {
  return c4 instanceof _mod681.SentrySpan;
}
export function isRootSpan(activeSpan) {
  return activeSpan === _mod681.getRootSpan(activeSpan);
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