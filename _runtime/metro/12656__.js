// _runtime/metro/12656__.js
import eventFromMessage from "../12640_eventFromMessage.js";
import _mod12657 from "12657__.js";
import 12636__ from "12636__.js";


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