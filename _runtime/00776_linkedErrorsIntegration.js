// _runtime/00776_linkedErrorsIntegration.js
import exceptionFromError from "00758_exceptionFromError.js";
import aggregateExceptionsFromError from "00777_aggregateExceptionsFromError.js";
import setupIntegration from "00752_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = aggregateExceptionsFromError.applyAggregateErrorsToEvent(
        exceptionFromError.exceptionFromError,
        options.stackParser,
        closure_1,
        closure_0,
        arg0,
        arg1,
      );
    },
  };
  return obj;
});
