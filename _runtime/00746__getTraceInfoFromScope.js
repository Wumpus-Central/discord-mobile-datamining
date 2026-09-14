// _runtime/00746__getTraceInfoFromScope.js
import spanToJSON from "00684_spanToJSON.js";
import _mod713 from "metro/00713__.js";
import _mod722 from "metro/00722__.js";

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(client, currentScope) {
  _require = client;
  dependencyMap = currentScope;
  if (currentScope) {
    let withScopeResult = require("metro/00713__.js").withScope(currentScope, () => {
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
    const obj = require("metro/00713__.js");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
