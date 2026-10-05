// _runtime/00787_linkedErrorsIntegration.js
import _enhanceErrorWithSentryInfo from "00769__enhanceErrorWithSentryInfo.js";
import applyAggregateErrorsToEvent from "00788_applyAggregateErrorsToEvent.js";
import 00763__ from "metro/00763__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = obj.limit || 5;
  let closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(exception, originalException, getOptions) {
      const options = getOptions.getOptions();
      const obj = applyAggregateErrorsToEvent;
      const result = obj.applyAggregateErrorsToEvent(_enhanceErrorWithSentryInfo.exceptionFromError, options.stackParser, closure_1, closure_0, exception, originalException);
    }
  };
});