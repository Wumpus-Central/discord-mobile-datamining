// === Module 787: linkedErrorsIntegration ===

// Module 787 (linkedErrorsIntegration)
import exceptionFromError from "exceptionFromError" /* 769 */;
import aggregateExceptionsFromError from "aggregateExceptionsFromError" /* 788 */;
import setupIntegration from "setupIntegration" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(exception, originalException, getOptions) {
      options = getOptions.getOptions();
      const result = aggregateExceptionsFromError.applyAggregateErrorsToEvent(exceptionFromError.exceptionFromError, options.stackParser, closure_1, closure_0, exception, originalException);
    }
  };
});