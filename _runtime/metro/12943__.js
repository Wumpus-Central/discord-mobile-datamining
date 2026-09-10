// === Module 12943: ? ===

// Module 12943
import eventFromMessage from "eventFromMessage" /* 12927 */;
import _mod12944 from "module_12944" /* 12944 */;
import setupIntegration from "module_12923" /* 12923 */;


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(exception, originalException, getOptions) {
      const options = getOptions.getOptions();
      const result = _mod12944.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
  return obj;
});