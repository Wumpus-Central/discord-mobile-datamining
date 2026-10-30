// _runtime/00775_linkedErrorsIntegration.js
import exceptionFromError from "00757_exceptionFromError.js";
import aggregateExceptionsFromError from "00776_aggregateExceptionsFromError.js";
import setupIntegration from "00751_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

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
      const result = aggregateExceptionsFromError.applyAggregateErrorsToEvent(
        exceptionFromError.exceptionFromError,
        options.stackParser,
        closure_1,
        closure_0,
        exception,
        originalException,
      );
    },
  };
});
