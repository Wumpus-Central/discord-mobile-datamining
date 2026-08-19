// _runtime/00911_linkedErrorsIntegration.js
import setupIntegration from "00887_setupIntegration.js";

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
      const result = callback(912).applyAggregateErrorsToEvent(callback(893).exceptionFromError, options.stackParser, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});