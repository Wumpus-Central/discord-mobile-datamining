// _runtime/07814_linkedErrorsIntegration.js
import setupIntegration from "setupIntegration";


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0;
  let closure_1;
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = callback(7815).applyAggregateErrorsToEvent(callback(7798).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});