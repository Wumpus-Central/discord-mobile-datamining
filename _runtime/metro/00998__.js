// === Module 998: ? ===

// Module 998
import _mod693 from "module_693" /* 693 */;


export const isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof _mod693.SentrySpan;
};
export const isRootSpan = function isRootSpan(activeSpan) {
  const obj = _mod693;
  return activeSpan === obj.getRootSpan(activeSpan);
};
export const setEndTimeValue = function setEndTimeValue(arg0, _endTime) {
  arg0._endTime = _endTime;
};
export const convertSpanToTransaction = function convertSpanToTransaction(_convertSpanToTransaction) {
  _convertSpanToTransaction = _convertSpanToTransaction._convertSpanToTransaction;
  let callResult;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      callResult = _convertSpanToTransaction.call(_convertSpanToTransaction);
    }
  }
  return callResult;
};