// _runtime/metro/12903__.js
import eventFromMessage from "../12887_eventFromMessage.js";
import _mod12904 from "12904__.js";
import setupIntegration from "12883__.js";

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
      const result = _mod12904.applyAggregateErrorsToEvent(
        eventFromMessage.exceptionFromError,
        options.stackParser,
        options.maxValueLength,
        closure_1,
        closure_0,
        exception,
        originalException,
      );
    },
  };
  return obj;
});
