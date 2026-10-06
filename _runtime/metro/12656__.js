// === Module 12656: ? ===

// Module 12656
import eventFromMessage from "eventFromMessage" /* 12640 */;
import _mod12657 from "module_12657" /* 12657 */;
import module_12636 from "module_12636" /* 12636 */;


export const linkedErrorsIntegration = module_12636.defineIntegration(() => {
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
      const obj = _mod12657;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, exception, originalException);
    }
  };
});