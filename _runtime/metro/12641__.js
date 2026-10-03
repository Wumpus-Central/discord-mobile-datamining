// === Module 12641: ? ===

// Module 12641
import eventFromMessage from "eventFromMessage" /* 12625 */;
import _mod12642 from "module_12642" /* 12642 */;
import setupIntegration from "module_12621" /* 12621 */;


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
      const result = _mod12642.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
});