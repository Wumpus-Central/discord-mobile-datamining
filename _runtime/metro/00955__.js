// _runtime/metro/00955__.js
import _mod907 from "00907__.js";
import registerSpanErrorInstrumentation from "00693__.js";

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
      const result = registerSpanErrorInstrumentation.applyAggregateErrorsToEvent(
        _mod907.exceptionFromError,
        options.stackParser,
        closure_1,
        closure_0,
        arg0,
        arg1,
      );
    },
  };
});
