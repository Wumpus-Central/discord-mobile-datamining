// _runtime/00746__getTraceInfoFromScope.js
import spanToJSON from "00684_spanToJSON.js";
import _mod722 from "metro/00722__.js";

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (arg1) {
    let withScopeResult = require("metro/00713__.js").withScope(arg1, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let tmpResult = tmp(684);
        let spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        tmpResult = tmp(713);
        spanToTraceContextResult = tmpResult.getTraceContextFromScope(closure_1);
      }
      const tmpResult1 = _mod722;
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult1.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult1.getDynamicSamplingContextFromScope(closure_0, closure_1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = require("metro/00713__.js");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
