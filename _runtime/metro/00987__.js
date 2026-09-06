// === Module 987: ? ===

// Module 987
import _mod682 from "module_682" /* 682 */;

require = arg1;
const dependencyMap = arg6;

export const isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof _mod682.SentrySpan;
};
export const isRootSpan = function isRootSpan(activeSpan) {
  return activeSpan === _mod682.getRootSpan(activeSpan);
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