// _runtime/metro/09886__.js
import eventFromMessage from "../09870_eventFromMessage.js";
import _mod9887 from "09887__.js";
import setupIntegration from "09866__.js";

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
      const result = _mod9887.applyAggregateErrorsToEvent(
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
