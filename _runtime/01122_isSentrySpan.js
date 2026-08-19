// _runtime/01122_isSentrySpan.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
arg5.isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof registerSpanErrorInstrumentation.SentrySpan;
};
arg5.isRootSpan = function isRootSpan(activeSpan) {
  return activeSpan === registerSpanErrorInstrumentation.getRootSpan(activeSpan);
};
arg5.setEndTimeValue = function setEndTimeValue(closure_2, _endTime) {
  closure_2._endTime = _endTime;
};
arg5.convertSpanToTransaction = function convertSpanToTransaction(closure_2) {
  const _convertSpanToTransaction = obj._convertSpanToTransaction;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      const call = _convertSpanToTransaction.call;
      typeof call === "unknown" ? _convertSpanToTransaction() : call(obj);
    }
  }
};