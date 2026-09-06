// _runtime/metro/12809__.js
import generatePropagationContext from "../12807_generatePropagationContext.js";
import BAGGAGE_HEADER_NAME from "../12810_BAGGAGE_HEADER_NAME.js";

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
      let obj = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
      tmp = obj;
    }
  }
  let result = BAGGAGE_HEADER_NAME.baggageHeaderToDynamicSamplingContext(_slicedToArray);
  if (tmp) {
    if (tmp.traceId) {
      obj = { traceId: null, parentSpanId: null, spanId: null, sampled: null, dsc: null };
      ({ traceId: obj7.traceId, parentSpanId: obj7.parentSpanId, parentSampled } = tmp);
      let tmp4Result = generatePropagationContext;
      obj.spanId = tmp4Result.generateSpanId();
      obj.sampled = parentSampled;
      if (!result) {
        result = {};
      }
      obj.dsc = result;
      return obj;
    }
  }
  obj = { traceId: null, spanId: null };
  tmp4Result = generatePropagationContext;
  obj.traceId = tmp4Result.generateTraceId();
  obj.spanId = generatePropagationContext.generateSpanId();
  return obj;
};
