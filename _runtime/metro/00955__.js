// === Module 955: ? ===

// Module 955
import _mod907 from "module_907" /* 907 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      options = getOptions.getOptions();
      const result = registerSpanErrorInstrumentation.applyAggregateErrorsToEvent(_mod907.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});