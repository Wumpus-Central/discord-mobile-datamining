// _runtime/metro/12641__.js
import eventFromMessage from "../12625_eventFromMessage.js";
import _mod12642 from "12642__.js";
import 12621__ from "12621__.js";


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