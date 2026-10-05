// === Module 787: linkedErrorsIntegration ===

// Module 787 (linkedErrorsIntegration)
import _enhanceErrorWithSentryInfo from "_enhanceErrorWithSentryInfo" /* 769 */;
import applyAggregateErrorsToEvent from "applyAggregateErrorsToEvent" /* 788 */;
import module_763 from "module_763" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = obj.limit || 5;
  let closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(exception, originalException, getOptions) {
      const options = getOptions.getOptions();
      const obj = applyAggregateErrorsToEvent;
      const result = obj.applyAggregateErrorsToEvent(_enhanceErrorWithSentryInfo.exceptionFromError, options.stackParser, closure_1, closure_0, exception, originalException);
    }
  };
});