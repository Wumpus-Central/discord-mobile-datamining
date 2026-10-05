// === Module 757: _getTraceInfoFromScope ===

// Module 757 (_getTraceInfoFromScope)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import _mod724 from "module_724" /* 724 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 733 */;

const require = globalThis.__r;
let _require, dependencyMap;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(client, currentScope) {
  let withScopeResult;
  _require = client;
  dependencyMap = currentScope;
  if (dependencyMap) {
    let obj = require("module_724");
    withScopeResult = obj.withScope(currentScope, () => {
      let dynamicSamplingContextFromSpan;
      let spanToTraceContextResult;
      const obj = TRACE_FLAG_NONE;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        const tmpResult3 = _mod724;
        spanToTraceContextResult = tmpResult3.getTraceContextFromScope(currentScope);
      }
      const tmpResult4 = freezeDscOnSpan;
      if (activeSpan) {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(client, currentScope);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};