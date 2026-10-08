// === Module 11069: ? ===

// Module 11069
import eventFromMessage from "eventFromMessage" /* 11053 */;
import _mod11070 from "module_11070" /* 11070 */;
import setupIntegration from "module_11049" /* 11049 */;


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
      const result = _mod11070.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
});