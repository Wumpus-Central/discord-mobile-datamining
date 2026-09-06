// === Module 699: ? ===

// Module 699
import generateSpanId from "generateSpanId" /* 694 */;
import MAX_BAGGAGE_STRING_LENGTH from "MAX_BAGGAGE_STRING_LENGTH" /* 700 */;
import _mod702 from "module_702" /* 702 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
  let traceId = arg0;
  if (arg0 === undefined) {
    traceId = generateSpanId.generateTraceId();
  }
  let spanId = arg1;
  if (arg1 === undefined) {
    spanId = generateSpanId.generateSpanId();
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
export const generateTraceparentHeader = function generateTraceparentHeader(traceId, propagationSpanId2, sampled2) {
  if (traceId === undefined) {
    traceId = generateSpanId.generateTraceId();
  }
  let spanId = propagationSpanId2;
  if (propagationSpanId2 === undefined) {
    spanId = generateSpanId.generateSpanId();
  }
  let str = "00";
  if (sampled2) {
    str = "01";
  }
  return "00-" + traceId + "-" + spanId + "-" + str;
};
export const propagationContextFromHeaders = function propagationContextFromHeaders(str, arg1) {
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
  let result = MAX_BAGGAGE_STRING_LENGTH.baggageHeaderToDynamicSamplingContext(arg1);
  let traceId;
  if (tmp != null) {
    traceId = tmp.traceId;
  }
  if (traceId) {
    let tmp4Result = tmp4(701);
    let sample_rand;
    if (result != null) {
      sample_rand = result.sample_rand;
    }
    const str3 = tmp4Result.parseSampleRate(sample_rand);
    if (undefined !== str3) {
      if (result) {
        result.sample_rand = str3.toString();
      }
      obj = { traceId: null, parentSpanId: null, sampled: null, dsc: null, sampleRand: null };
      ({ traceId: obj10.traceId, parentSpanId: obj10.parentSpanId, parentSampled: obj10.sampled } = tmp);
      if (!result) {
        result = {};
      }
      obj.dsc = result;
      obj.sampleRand = str3;
      return obj;
    } else {
      tmp4Result = tmp4(701);
      let sample_rate;
      if (result != null) {
        sample_rate = result.sample_rate;
      }
      const parseSampleRateResult = tmp4Result.parseSampleRate(sample_rate);
      if (!parseSampleRateResult) {
        tmp4(696).safeMathRandom();
        const tmp4Result1 = tmp4(696);
      } else {
        let parentSampled;
        if (tmp != null) {
          parentSampled = tmp.parentSampled;
        }
      }
      const safeMathRandomResult1 = tmp4(696).safeMathRandom();
      if (tmp.parentSampled) {
        let result1 = safeMathRandomResult1 * parseSampleRateResult;
      } else {
        result1 = parseSampleRateResult + safeMathRandomResult1 * (1 - parseSampleRateResult);
      }
      const tmp4Result2 = tmp4(696);
    }
  } else {
    obj = { traceId: tmp4(694).generateTraceId(), sampleRand: null };
    const tmp4Result3 = tmp4(694);
    obj.sampleRand = tmp4(696).safeMathRandom();
    return obj;
  }
};
export const shouldContinueTrace = function shouldContinueTrace(client, org_id) {
  const result = _mod702.extractOrgIdFromClient(client);
  if (org_id) {
    if (result) {
      if (org_id !== result) {
        const debug2 = tmp(689).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("Won't continue trace because org IDs don't match (incoming baggage: " + org_id + ", SDK options: " + result + ")");
        let flag = false;
      }
      return flag;
    }
  }
  const tmp4 = client.getOptions().strictTraceContinuation || false;
  flag = !tmp4;
  if (tmp4) {
    let tmp5 = org_id;
    if (org_id) {
      tmp5 = !result;
    }
    if (!tmp5) {
      let tmp6 = !org_id;
      if (!org_id) {
        tmp6 = result;
      }
      tmp5 = tmp6;
    }
    flag = !tmp5;
  }
  if (!flag) {
    const debug = tmp(689).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: " + org_id + ", Sentry client: " + result + ")");
    flag = false;
  }
};