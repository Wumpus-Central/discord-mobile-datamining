// === Module 746: _getTraceInfoFromScope ===

// Module 746 (_getTraceInfoFromScope)
import spanToJSON from "spanToJSON" /* 684 */;
import _mod713 from "module_713" /* 713 */;
import _mod722 from "module_722" /* 722 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(client, currentScope) {
  _require = client;
  dependencyMap = currentScope;
  if (currentScope) {
    let withScopeResult = require("module_713").withScope(currentScope, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let spanToTraceContextResult = spanToJSON.spanToTraceContext(activeSpan);
        const tmpResult = spanToJSON;
      } else {
        spanToTraceContextResult = _mod713.getTraceContextFromScope(closure_1);
        const tmpResult3 = _mod713;
      }
      const tmpResult4 = _mod722;
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(closure_0, closure_1);
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