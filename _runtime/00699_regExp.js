// === Module 699: regExp ===

// Module 699 (regExp)
import generateSpanId from "generateSpanId" /* 694 */;
import baggageHeaderToDynamicSamplingContext from "baggageHeaderToDynamicSamplingContext" /* 700 */;
import dsnFromString from "dsnFromString" /* 702 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
    traceId = generateSpanId.generateTraceId();
    const obj = generateSpanId;
  }
  let spanId = arg1;
  if (arg1 === undefined) {
    spanId = generateSpanId.generateSpanId();
    const obj2 = generateSpanId;
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
arg5.generateTraceparentHeader = function generateTraceparentHeader(traceId, propagationSpanId2, sampled2) {
  if (traceId === undefined) {
    traceId = generateSpanId.generateTraceId();
    const obj = generateSpanId;
  }
  let spanId = propagationSpanId2;
  if (propagationSpanId2 === undefined) {
    spanId = generateSpanId.generateSpanId();
    const obj2 = generateSpanId;
  }
  let str = "00";
  if (sampled2) {
    str = "01";
  }
  return "00-" + traceId + "-" + spanId + "-" + str;
};
arg5.propagationContextFromHeaders = function propagationContextFromHeaders(str) {
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
  let result = baggageHeaderToDynamicSamplingContext.baggageHeaderToDynamicSamplingContext(arg1);
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
      ({ traceId: obj10[0], parentSpanId: obj10[1], parentSampled: obj10[2] } = tmp);
      if (!result) {
        result = {};
      }
      obj[3] = result;
      obj[4] = str3;
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
    obj = { traceId: null, sampleRand: null };
    obj[0] = tmp4(694).generateTraceId();
    const tmp4Result3 = tmp4(694);
    obj[1] = tmp4(696).safeMathRandom();
    return obj;
  }
};
arg5.shouldContinueTrace = function shouldContinueTrace(client, org_id) {
  const result = dsnFromString.extractOrgIdFromClient(client);
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