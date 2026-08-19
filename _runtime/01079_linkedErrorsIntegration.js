// === Module 1079: linkedErrorsIntegration ===

// Module 1079 (linkedErrorsIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
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
      const result = callback(817).applyAggregateErrorsToEvent(callback(1031).exceptionFromError, options.stackParser, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});