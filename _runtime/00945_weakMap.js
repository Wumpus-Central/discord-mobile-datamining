// === Module 945: weakMap ===

// Module 945 (weakMap)
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 840 */;
import extractClientInfo from "extractClientInfo" /* 938 */;
import _mod940 from "module_940" /* 940 */;
import extractPromptResultAttributes from "extractPromptResultAttributes" /* 946 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  const value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2)[1];
      let span = tmp7.span;
      let obj = { code: null, message: "cancelled" };
      obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
      let setStatusResult = span.setStatus(obj);
      let span2 = tmp7.span;
      let endResult = span2.end();
      continue;
    }
    value.clear();
  }
};
export const completeSpanWithResults = function completeSpanWithResults(closure_4, id, result, self) {
  let setAttributesResult = weakMap;
  let value = weakMap.get(closure_4);
  if (!value) {
    const _Map = Map;
    const map = new Map();
    result = setAttributesResult.set(closure_4, map);
    value = map;
  }
  value = value.get(id);
  if (value) {
    let protocolVersion = result;
    ({ span, method } = value);
    if ("initialize" === method) {
      const result1 = extractClientInfo.extractSessionDataFromInitializeResponse(protocolVersion);
      setAttributesResult = {};
      const merged = Object.assign(extractClientInfo.buildServerAttributesFromInfo(result1.serverInfo));
      protocolVersion = result1.protocolVersion;
      if (protocolVersion) {
        setAttributesResult[_mod940.MCP_PROTOCOL_VERSION_ATTRIBUTE] = result1.protocolVersion;
      }
      setAttributesResult = span.setAttributes(setAttributesResult);
      span.end();
      value.delete(id);
    } else {
      setAttributesResult = self;
      if ("tools/call" !== method) {
        if ("prompts/get" === method) {
          span.setAttributes(extractPromptResultAttributes.extractPromptResultAttributes(protocolVersion, setAttributesResult.recordOutputs));
        }
      }
    }
    setAttributesResult = span.setAttributes(extractPromptResultAttributes.extractToolResultAttributes(protocolVersion, setAttributesResult.recordOutputs));
  }
};
export const storeSpanForRequest = function storeSpanForRequest(self, id, startInactiveSpanResult, method) {
  let obj = weakMap;
  let value = weakMap.get(self);
  if (!value) {
    const _Map = Map;
    const map = new Map();
    const result = obj.set(self, map);
    value = map;
  }
  obj = { span: startInactiveSpanResult, method, startTime: Date.now() };
  const result1 = value.set(id, obj);
};