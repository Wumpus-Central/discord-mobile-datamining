// === Module 12873: ? ===

// Module 12873
import eventFromMessage from "eventFromMessage" /* 12857 */;
import _mod12874 from "module_12874" /* 12874 */;
import setupIntegration from "module_12853" /* 12853 */;


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
      const result = _mod12874.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
  return obj;
});