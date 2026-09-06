// _runtime/00810_weakMap.js
import getSpanStatusFromHttpCode from "00705_getSpanStatusFromHttpCode.js";
import extractClientInfo from "00803_extractClientInfo.js";
import extractPromptResultAttributes from "00811_extractPromptResultAttributes.js";
import closure_2 from "metro/00032__slicedToArray.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const cleanupPendingSpansForTransport = function cleanupPendingSpansForTransport(arg0) {
  const value = weakMap.get(arg0);
  if (value) {
    const tmp2 = value[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp6 = callback;
      let tmp7 = callback(tmp4, 2)[1];
      let span = tmp7.span;
      let obj = { code: null, message: "cancelled" };
      let tmp8 = require;
      let tmp9 = dependencyMap;
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
      const obj5 = extractClientInfo;
      const tmp10 = require;
      const merged = Object.assign(extractClientInfo.buildServerAttributesFromInfo(result1.serverInfo));
      protocolVersion = result1.protocolVersion;
      if (protocolVersion) {
        setAttributesResult[tmp10(805).MCP_PROTOCOL_VERSION_ATTRIBUTE] = result1.protocolVersion;
      }
      setAttributesResult = span.setAttributes(setAttributesResult);
      span.end();
      value.delete(id);
      const obj6 = extractClientInfo;
    } else {
      setAttributesResult = self;
      if ("tools/call" !== method) {
        if ("prompts/get" === method) {
          span.setAttributes(
            extractPromptResultAttributes.extractPromptResultAttributes(
              protocolVersion,
              setAttributesResult.recordOutputs,
            ),
          );
          const obj7 = extractPromptResultAttributes;
        }
      }
    }
    setAttributesResult = span.setAttributes(
      extractPromptResultAttributes.extractToolResultAttributes(protocolVersion, setAttributesResult.recordOutputs),
    );
    const obj3 = extractPromptResultAttributes;
  }
};
export const storeSpanForRequest = function storeSpanForRequest(arg0, id, startInactiveSpanResult, method) {
  let obj = weakMap;
  let value = weakMap.get(arg0);
  if (!value) {
    const _Map = Map;
    const map = new Map();
    const result = obj.set(arg0, map);
    value = map;
  }
  obj = { span: startInactiveSpanResult, method, startTime: Date.now() };
  const result1 = value.set(id, obj);
};
