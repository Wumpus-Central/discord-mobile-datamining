// === Module 998: ? ===

// Module 998
import _mod693 from "module_693" /* 693 */;

require = arg1;
const dependencyMap = arg6;

export const isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof _mod693.SentrySpan;
};
export const isRootSpan = function isRootSpan(activeSpan) {
  return activeSpan === _mod693.getRootSpan(activeSpan);
};
export const setEndTimeValue = function setEndTimeValue(arg0, _endTime) {
  arg0._endTime = _endTime;
};
export const convertSpanToTransaction = function convertSpanToTransaction(_convertSpanToTransaction) {
  _convertSpanToTransaction = _convertSpanToTransaction._convertSpanToTransaction;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      const call = _convertSpanToTransaction.call;
      typeof call === "unknown" ? _convertSpanToTransaction() : call(_convertSpanToTransaction);
    }
  }
};