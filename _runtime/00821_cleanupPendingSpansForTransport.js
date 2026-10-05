// _runtime/00821_cleanupPendingSpansForTransport.js
import SPAN_STATUS_ERROR from "00716_SPAN_STATUS_ERROR.js";
import _mod814 from "metro/00814__.js";
import CLIENT_ADDRESS_ATTRIBUTE from "00816_CLIENT_ADDRESS_ATTRIBUTE.js";
import extractPromptResultAttributes from "00822_extractPromptResultAttributes.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

let map;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  const value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2)[1];
      let span = tmp7.span;
      let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "cancelled" };
      let setStatus = span.setStatus;
      let setStatusResult = setStatus(obj);
      let span2 = tmp7.span;
      let endResult = span2.end();
      continue;
    }
    value.clear();
  }
};
export const completeSpanWithResults = function completeSpanWithResults(arg0, id, result, self) {
  let method;
  let span;
  let value = weakMap.get(arg0);
  if (!value) {
    const _Map = Map;
    self = this;
    const self2 = this;
    map = new Map();
    result = weakMap.set(arg0, map);
    value = map;
  }
  const value2 = value.get(id);
  if (value2) {
    ({ span, method } = value2);
    if ("initialize" === method) {
      const obj4 = _mod814;
      const result1 = obj4.extractSessionDataFromInitializeResponse(result);
      const obj2 = {};
      const obj6 = _mod814;
      const merged = Object.assign(obj6.buildServerAttributesFromInfo(result1.serverInfo));
      if (result1.protocolVersion) {
        obj2[CLIENT_ADDRESS_ATTRIBUTE.MCP_PROTOCOL_VERSION_ATTRIBUTE] = result1.protocolVersion;
      }
      span.setAttributes(obj2);
    } else if ("tools/call" === method) {
      const obj3 = extractPromptResultAttributes;
      span.setAttributes(obj3.extractToolResultAttributes(result, self.recordOutputs));
    } else if ("prompts/get" === method) {
      const obj7 = extractPromptResultAttributes;
      span.setAttributes(obj7.extractPromptResultAttributes(result, self.recordOutputs));
    }
    span.end();
    value.delete(id);
  }
};
export const storeSpanForRequest = function storeSpanForRequest(self, id, startInactiveSpanResult, method) {
  let value = weakMap.get(self);
  if (!value) {
    const _Map = Map;
    self = this;
    const self2 = this;
    map = new Map();
    const result = weakMap.set(self, map);
    value = map;
  }
  const obj2 = { span: startInactiveSpanResult, method, startTime: Date.now() };
  const result1 = value.set(id, obj2);
};
