// === Module 746: _getTraceInfoFromScope ===

// Module 746 (_getTraceInfoFromScope)
import spanToJSON from "spanToJSON" /* 684 */;
import _mod713 from "module_713" /* 713 */;
import _mod722 from "module_722" /* 722 */;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, cloneResult) {
  _require = arg0;
  dependencyMap = cloneResult;
  if (cloneResult) {
    let withScopeResult = require("module_713").withScope(cloneResult, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let tmpResult = spanToJSON;
        let spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        tmpResult = _mod713;
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
    const obj = require("module_713");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};