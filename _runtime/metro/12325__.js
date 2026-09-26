// === Module 12325: ? ===

// Module 12325
import generatePropagationContext from "generatePropagationContext" /* 12323 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12326 */;

require = arg1;
const dependencyMap = arg6;
const regExp = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

export const TRACEPARENT_REGEXP = regExp;
export const extractTraceparentData = function extractTraceparentData(str) {
  if (str) {
    const match = str.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      const obj = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
      return obj;
    }
  }
};
export const generateSentryTraceHeader = function generateSentryTraceHeader() {
  if (traceId === undefined) {
    traceId = generatePropagationContext.generateTraceId();
  }
  if (spanId === undefined) {
    spanId = generatePropagationContext.generateSpanId();
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
export const propagationContextFromHeaders = function propagationContextFromHeaders(str, _slicedToArray) {
  let tmp;
  if (str) {
    const match = str.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      const obj = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
      tmp = obj;
    }
  }
  let result = BAGGAGE_HEADER_NAME.baggageHeaderToDynamicSamplingContext(_slicedToArray);
  if (tmp) {
    if (tmp.traceId) {
      const obj3 = { traceId: null, parentSpanId: null, spanId: null, sampled: null, dsc: null };
      ({ traceId: obj7.traceId, parentSpanId: obj7.parentSpanId, parentSampled } = tmp);
      obj3.spanId = generatePropagationContext.generateSpanId();
      obj3.sampled = parentSampled;
      if (!result) {
        result = {};
      }
      obj3.dsc = result;
      return obj3;
    }
  }
  const obj4 = { traceId: null, spanId: null };
  obj4.traceId = generatePropagationContext.generateTraceId();
  const tmp4Result3 = generatePropagationContext;
  obj4.spanId = generatePropagationContext.generateSpanId();
  return obj4;
};