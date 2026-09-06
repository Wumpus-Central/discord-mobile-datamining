// _runtime/metro/12873__.js
import eventFromMessage from "../12857_eventFromMessage.js";
import _mod12874 from "12874__.js";
import setupIntegration from "12853__.js";

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
      const result = _mod12874.applyAggregateErrorsToEvent(
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
