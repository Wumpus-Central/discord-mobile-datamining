// _runtime/metro/12374__.js
import eventFromMessage from "../12358_eventFromMessage.js";
import _mod12375 from "12375__.js";
import setupIntegration from "12354__.js";

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
      const options = getOptions.getOptions();
      const result = _mod12375.applyAggregateErrorsToEvent(
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
});
