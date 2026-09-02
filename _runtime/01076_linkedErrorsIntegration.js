// _runtime/01076_linkedErrorsIntegration.js
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = undefined;
  closure_1 = undefined;
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = callback(814).applyAggregateErrorsToEvent(
        callback(1028).exceptionFromError,
        options.stackParser,
        dependencyMap,
        callback,
        arg0,
        arg1,
      );
    },
  };
  return obj;
});
