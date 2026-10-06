// === Module 12592: ? ===

// Module 12592
import generatePropagationContext from "generatePropagationContext" /* 12590 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12593 */;

const regExp = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

export const TRACEPARENT_REGEXP = regExp;
export const extractTraceparentData = function extractTraceparentData(str) {
  const tmp = str;
  if (tmp) {
    const match = str.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      return { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
    }
  }
};
export const generateSentryTraceHeader = function generateSentryTraceHeader() {
  let spanId;
  let traceId;
  if (traceId === undefined) {
    const obj = generatePropagationContext;
    traceId = obj.generateTraceId();
  }
  if (spanId === undefined) {
    const obj2 = generatePropagationContext;
    spanId = obj2.generateSpanId();
  }
  let str = "";
  if (undefined !== sampled) {
    let str2 = "-0";
    if (sampled) {
      str2 = "-1";
    }
    str = str2;
  }
  return "" + traceId + "-" + spanId + str;
};
export const propagationContextFromHeaders = function propagationContextFromHeaders(dependencyMap, _slicedToArray) {
  let parentSampled;
  let tmp4Result;
  let tmp4Result3;
  let tmp4Result4;
  let tmp;
  if (dependencyMap) {
    const match = dependencyMap.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      tmp = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
      const obj = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
    }
  }
  const obj2 = BAGGAGE_HEADER_NAME;
  let result = obj2.baggageHeaderToDynamicSamplingContext(_slicedToArray);
  if (tmp) {
    if (tmp.traceId) {
      const obj3 = { traceId: null, parentSpanId: null, spanId: tmp4Result.generateSpanId(), sampled: parentSampled, dsc: result };
      ({ traceId: obj7.traceId, parentSpanId: obj7.parentSpanId, parentSampled } = tmp);
      tmp4Result = generatePropagationContext;
      if (!result) {
        result = {};
      }
      return obj3;
    }
  }
  const obj4 = { traceId: tmp4Result3.generateTraceId(), spanId: tmp4Result4.generateSpanId() };
  tmp4Result3 = generatePropagationContext;
  tmp4Result4 = generatePropagationContext;
  return obj4;
};