// === Module 955: ? ===

// Module 955
import eventFromException from "eventFromException" /* 907 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = obj.limit || 5;
  let closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const obj = registerSpanErrorInstrumentation;
      const result = obj.applyAggregateErrorsToEvent(eventFromException.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});