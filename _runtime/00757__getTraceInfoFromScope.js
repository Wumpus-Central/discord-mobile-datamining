// _runtime/00757__getTraceInfoFromScope.js
import TRACE_FLAG_NONE from "00695_TRACE_FLAG_NONE.js";
import _mod724 from "metro/00724__.js";
import freezeDscOnSpan from "00733_freezeDscOnSpan.js";

const require = globalThis.__r;
let _require, dependencyMap;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _getTraceInfoFromScope = function _getTraceInfoFromScope(client, currentScope) {
  let withScopeResult;
  _require = client;
  dependencyMap = currentScope;
  if (dependencyMap) {
    let obj = require("metro/00724__.js");
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
