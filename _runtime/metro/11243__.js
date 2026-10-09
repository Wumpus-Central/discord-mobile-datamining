// === Module 11243: ? ===

// Module 11243
import eventFromMessage from "eventFromMessage" /* 11227 */;
import _mod11244 from "module_11244" /* 11244 */;
import setupIntegration from "module_11223" /* 11223 */;


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
      const result = _mod11244.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
});