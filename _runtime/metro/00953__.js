// === Module 953: ? ===

// Module 953
import _mod905 from "module_905" /* 905 */;
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
      const options = getOptions.getOptions();
      const result = registerSpanErrorInstrumentation.applyAggregateErrorsToEvent(_mod905.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});