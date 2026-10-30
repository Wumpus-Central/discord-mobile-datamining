// === Module 745: _getTraceInfoFromScope ===

// Module 745 (_getTraceInfoFromScope)
import spanToJSON from "spanToJSON" /* 683 */;
import _mod712 from "module_712" /* 712 */;
import _mod721 from "module_721" /* 721 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function _getTraceInfoFromScope(client, currentScope) {
  _require = client;
  dependencyMap = currentScope;
  if (currentScope) {
    let withScopeResult = require("module_712").withScope(currentScope, () => {
      const activeSpan = spanToJSON.getActiveSpan();
      if (activeSpan) {
        let spanToTraceContextResult = spanToJSON.spanToTraceContext(activeSpan);
        const tmpResult = spanToJSON;
      } else {
        spanToTraceContextResult = _mod712.getTraceContextFromScope(closure_1);
        const tmpResult3 = _mod712;
      }
      const tmpResult4 = _mod721;
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult4.getDynamicSamplingContextFromScope(closure_0, closure_1);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = require("module_712");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
}