// _runtime/00745__getTraceInfoFromScope.js
import spanToJSON from "00683_spanToJSON.js";
import _mod712 from "metro/00712__.js";
import _mod721 from "metro/00721__.js";

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function _getTraceInfoFromScope(client, currentScope) {
  _require = client;
  dependencyMap = currentScope;
  if (currentScope) {
    let withScopeResult = require("metro/00712__.js").withScope(currentScope, () => {
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
    const obj = require("metro/00712__.js");
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
}
