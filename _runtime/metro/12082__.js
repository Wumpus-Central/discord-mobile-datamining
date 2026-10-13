// === Module 12082: ? ===

// Module 12082
import eventFromMessage from "eventFromMessage" /* 12066 */;
import _mod12083 from "module_12083" /* 12083 */;
import setupIntegration from "module_12062" /* 12062 */;


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
      const result = _mod12083.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
});