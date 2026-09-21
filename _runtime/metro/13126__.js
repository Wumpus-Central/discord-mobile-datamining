// _runtime/metro/13126__.js
import eventFromMessage from "../13110_eventFromMessage.js";
import _mod13127 from "13127__.js";
import setupIntegration from "13106__.js";

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
      const result = _mod13127.applyAggregateErrorsToEvent(
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
