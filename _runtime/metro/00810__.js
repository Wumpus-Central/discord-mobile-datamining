// _runtime/metro/00810__.js
import SPAN_STATUS_ERROR from "../00705_SPAN_STATUS_ERROR.js";
import extractClientInfo from "../00803_extractClientInfo.js";
import CLIENT_ADDRESS_ATTRIBUTE from "../00805_CLIENT_ADDRESS_ATTRIBUTE.js";
import extractPromptResultAttributes from "../00811_extractPromptResultAttributes.js";
import _slicedToArray from "00032__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2)[1];
      let span = tmp7.span;
      let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "cancelled" };
      let setStatusResult = span.setStatus(obj);
      let span2 = tmp7.span;
      let endResult = span2.end();
      continue;
    }
    value.clear();
  }
};
export const completeSpanWithResults = function completeSpanWithResults(arg0, id, result, self) {
  value = weakMap.get(arg0);
  if (!value) {
    const _Map = Map;
    const map = new Map();
    result = weakMap.set(arg0, map);
    value = map;
  }
  value2 = value.get(id);
  if (value2) {
    let protocolVersion = result;
    ({ span, method } = value2);
    if ("initialize" === method) {
      const result1 = extractClientInfo.extractSessionDataFromInitializeResponse(protocolVersion);
      let obj2 = {};
      const merged = Object.assign(extractClientInfo.buildServerAttributesFromInfo(result1.serverInfo));
      protocolVersion = result1.protocolVersion;
      if (protocolVersion) {
        obj2[CLIENT_ADDRESS_ATTRIBUTE.MCP_PROTOCOL_VERSION_ATTRIBUTE] = result1.protocolVersion;
      }
      span.setAttributes(obj2);
      span.end();
      value.delete(id);
    } else {
      obj2 = self;
      if ("tools/call" !== method) {
        if ("prompts/get" === method) {
          span.setAttributes(
            extractPromptResultAttributes.extractPromptResultAttributes(protocolVersion, obj2.recordOutputs),
          );
        }
      }
    }
    obj2 = span.setAttributes(
      extractPromptResultAttributes.extractToolResultAttributes(protocolVersion, obj2.recordOutputs),
    );
  }
};
export const storeSpanForRequest = function storeSpanForRequest(self, id, startInactiveSpanResult, method) {
  value = weakMap.get(self);
  if (!value) {
    const _Map = Map;
    const map = new Map();
    const result = weakMap.set(self, map);
    value = map;
  }
  const result1 = value.set(id, { span: startInactiveSpanResult, method, startTime: Date.now() });
  const obj2 = { span: startInactiveSpanResult, method, startTime: Date.now() };
};
