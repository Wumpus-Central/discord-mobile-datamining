// === Module 12641: ? ===

// Module 12641
import eventFromMessage from "eventFromMessage" /* 12625 */;
import _mod12642 from "module_12642" /* 12642 */;
import module_12621 from "module_12621" /* 12621 */;


export const linkedErrorsIntegration = module_12621.defineIntegration(() => {
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
      const obj = _mod12642;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
});