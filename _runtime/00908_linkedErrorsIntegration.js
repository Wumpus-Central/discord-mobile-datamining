// _runtime/00908_linkedErrorsIntegration.js
import setupIntegration from "00884_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
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
      const result = callback(909).applyAggregateErrorsToEvent(
        callback(890).exceptionFromError,
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
