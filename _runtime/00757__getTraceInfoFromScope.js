// === Module 757: _getTraceInfoFromScope ===

// Module 757 (_getTraceInfoFromScope)
import spanToJSON from "spanToJSON" /* 695 */;
import _mod724 from "module_724" /* 724 */;
import _mod733 from "module_733" /* 733 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(client, currentScope) {
  _require = client;
  dependencyMap = currentScope;
  if (currentScope) {
    let withScopeResult = require("module_724").withScope(currentScope, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let spanToTraceContextResult = spanToJSON.spanToTraceContext(activeSpan);
        const tmpResult = spanToJSON;
      } else {
        spanToTraceContextResult = _mod724.getTraceContextFromScope(closure_1);
        const tmpResult3 = _mod724;
      }
      const tmpResult4 = _mod733;
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(closure_0, closure_1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = require("module_724");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};