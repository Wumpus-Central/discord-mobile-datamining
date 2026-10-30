// === Module 775: linkedErrorsIntegration ===

// Module 775 (linkedErrorsIntegration)
import exceptionFromError from "exceptionFromError" /* 757 */;
import aggregateExceptionsFromError from "aggregateExceptionsFromError" /* 776 */;
import setupIntegration from "setupIntegration" /* 751 */;

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
      const options = getOptions.getOptions();
      const result = aggregateExceptionsFromError.applyAggregateErrorsToEvent(exceptionFromError.exceptionFromError, options.stackParser, closure_1, closure_0, exception, originalException);
    }
  };
});