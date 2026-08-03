// === Module 7375: regExp ===

// Module 7375 (regExp)
const require = arg1;
const dependencyMap = arg6;
const regExp = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
arg5.TRACEPARENT_REGEXP = regExp;
arg5.extractTraceparentData = function extractTraceparentData(str) {
  if (str) {
    const match = str.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      const obj = { traceId: null, parentSampled: null, parentSpanId: null };
      obj[0] = match[1];
      obj[1] = flag;
      obj[2] = match[2];
      return obj;
    }
  }
};
arg5.generateSentryTraceHeader = function generateSentryTraceHeader() {
  let traceId = arg0;
  if (arg0 === undefined) {
    traceId = require(7373) /* generatePropagationContext */.generateTraceId();
    const obj = require(7373) /* generatePropagationContext */;
  }
  let spanId = arg1;
  if (arg1 === undefined) {
    spanId = require(7373) /* generatePropagationContext */.generateSpanId();
    const obj2 = require(7373) /* generatePropagationContext */;
  }
  let str = "";
  if (undefined !== arg2) {
    let str2 = "-0";
    if (arg2) {
      str2 = "-1";
    }
    str = str2;
  }
  return "" + traceId + "-" + spanId + str;
};
arg5.propagationContextFromHeaders = function propagationContextFromHeaders(str) {
  let parentSampled;
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
      let obj = { traceId: null, parentSampled: null, parentSpanId: null };
      obj[0] = match[1];
      obj[1] = flag;
      obj[2] = match[2];
      tmp = obj;
    }
  }
  let result = require(7376) /* baggageHeaderToDynamicSamplingContext */.baggageHeaderToDynamicSamplingContext(arg1);
  if (tmp) {
    if (tmp.traceId) {
      obj = { traceId: null, parentSpanId: null, spanId: null, sampled: null, dsc: null };
      ({ traceId: obj7[0], parentSpanId: obj7[1], parentSampled } = tmp);
      let tmp4Result = tmp4(7373);
      obj[2] = tmp4Result.generateSpanId();
      obj[3] = parentSampled;
      if (!result) {
        result = {};
      }
      obj[4] = result;
      return obj;
    }
  }
  obj = { traceId: null, spanId: null };
  tmp4Result = tmp4(7373);
  obj[0] = tmp4Result.generateTraceId();
  const obj2 = require(7376) /* baggageHeaderToDynamicSamplingContext */;
  obj[1] = require(7373) /* generatePropagationContext */.generateSpanId();
  return obj;
};