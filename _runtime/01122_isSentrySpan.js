// === Module 1122: isSentrySpan ===

// Module 1122 (isSentrySpan)
const require = arg1;
const dependencyMap = arg6;
arg5.isSentrySpan = function isSentrySpan(c4) {
  return c4 instanceof require(817) /* registerSpanErrorInstrumentation */.SentrySpan;
};
arg5.isRootSpan = function isRootSpan(activeSpan) {
  return activeSpan === require(817) /* registerSpanErrorInstrumentation */.getRootSpan(activeSpan);
};
arg5.setEndTimeValue = function setEndTimeValue(outer1_2, _endTime) {
  outer1_2._endTime = _endTime;
};
arg5.convertSpanToTransaction = function convertSpanToTransaction(outer1_2) {
  const _convertSpanToTransaction = outer1_2._convertSpanToTransaction;
  if (null !== _convertSpanToTransaction) {
    if (undefined !== _convertSpanToTransaction) {
      const call = _convertSpanToTransaction.call;
      typeof call === "unknown" ? _convertSpanToTransaction() : call(outer1_2);
    }
  }
};