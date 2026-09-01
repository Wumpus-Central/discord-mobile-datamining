// _runtime/00881__getTraceInfoFromScope.js
import { getClient } from "00848_getClient.js";
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._getTraceInfoFromScope = function _getTraceInfoFromScope(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  if (arg1) {
    let withScopeResult = require("00848_getClient.js").withScope(arg1, () => {
      const activeSpan = callback(table[1]).getActiveSpan();
      if (activeSpan) {
        let tmpResult = tmp(tmp2[1]);
        let spanToTraceContextResult = tmpResult.spanToTraceContext(activeSpan);
      } else {
        tmpResult = tmp(tmp2[0]);
        spanToTraceContextResult = tmpResult.getTraceContextFromScope(table);
      }
      const tmpResult1 = callback(table[2]);
      if (activeSpan) {
        let dynamicSamplingContextFromSpan = tmpResult1.getDynamicSamplingContextFromSpan(activeSpan);
      } else {
        dynamicSamplingContextFromSpan = tmpResult1.getDynamicSamplingContextFromScope(callback, table);
      }
      const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
      return items;
    });
    const obj = getClient;
  } else {
    withScopeResult = [undefined, undefined];
  }
  return withScopeResult;
};
